import { useState, useRef } from 'react';
import {
  Box,
  CloseButton,
  Combobox,
  Loader,
  TextInput,
  useCombobox
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { searchNodes } from '@/lib/queries';
import { useMDB } from '@/providers/mdb-provider';
import type { GraphNode } from '@/hooks/use-graph-data';

interface NodeSearchProps {
  addNode: (node: GraphNode) => void;
  update: () => void;
}

export default function NodeSearch({ addNode, update }: NodeSearchProps) {
  const { driver } = useMDB();
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<GraphNode[] | null>(null);
  const [value, setValue] = useState('');
  const [empty, setEmpty] = useState(false);
  const abortController = useRef<AbortController | undefined>(null);

  const fetchOptions = (query: string) => {
    abortController.current?.abort();
    abortController.current = new AbortController();
    setLoading(true);

    searchNodes(driver, query, abortController.current.signal)
      .then((result) => {
        setData(result);
        setLoading(false);
        setEmpty(result.length === 0);
        abortController.current = undefined;
      })
      .catch(() => {});
  };

  const options = (data || []).map((node) => (
    <Combobox.Option value={node.id} key={node.id}>
      {node.id}
    </Combobox.Option>
  ));

  return (
    <Box
      pos="absolute"
      top="0"
      left="0"
      m="md"
      style={{ zIndex: 'var(--mantine-z-index-modal)', width: '33%' }}
    >
      <Combobox
        onOptionSubmit={(optionValue) => {
          setValue(optionValue);
          combobox.closeDropdown();
          const node = data?.find((n) => n.id === optionValue);
          if (node) {
            console.log('Adding node:', node);
            addNode(node);
            update();
          }
        }}
        withinPortal={false}
        store={combobox}
      >
        <Combobox.Target>
          <TextInput
            placeholder="Search nodes"
            value={value}
            onChange={(event) => {
              setValue(event.currentTarget.value);
              fetchOptions(event.currentTarget.value);
              combobox.resetSelectedOption();
              combobox.openDropdown();
            }}
            onClick={() => combobox.openDropdown()}
            onFocus={() => {
              combobox.openDropdown();
              if (data === null) {
                fetchOptions(value);
              }
            }}
            onBlur={() => combobox.closeDropdown()}
            leftSection={<IconSearch size={18} />}
            rightSection={loading ? (
              <Loader size={18} />
            ) : value !== '' && (
              <CloseButton
                size="sm"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  setValue('');
                  setData(null);
                }}
                aria-label="Clear value"
              />
            )}
          />
        </Combobox.Target>

        <Combobox.Dropdown hidden={data === null}>
          <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
            {options}
            {empty && <Combobox.Empty>No results found</Combobox.Empty>}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </Box>
  );
}
