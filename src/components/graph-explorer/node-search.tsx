import { useState, useRef } from 'react';
import {
  Box,
  CloseButton,
  Combobox,
  Loader,
  Text,
  TextInput,
  useCombobox
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { fetchGraphNode, searchNodes, type GraphNodeSearchResult } from '@/lib/queries';
import { useMDB } from '@/providers/mdb-provider';
import type { GraphNode } from '@/hooks/use-graph-data';
import type { GraphConfig } from '@/routes/graph-explorer';

interface NodeSearchProps {
  addNode: (node: GraphNode) => void;
  update: () => void;
  config: GraphConfig;
}

export default function NodeSearch({ config, addNode, update }: NodeSearchProps) {
  const { driver } = useMDB();
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<GraphNodeSearchResult[] | null>(null);
  const [value, setValue] = useState('');
  const [empty, setEmpty] = useState(false);
  const abortController = useRef<AbortController | undefined>(null);

  const fetchOptions = (query: string) => {
    abortController.current?.abort();
    abortController.current = new AbortController();
    setLoading(true);

    searchNodes(driver, query, abortController.current.signal, config.node)
      .then((results) => {
        setData(results);
        setLoading(false);
        setEmpty(results.length === 0);
        abortController.current = undefined;
      })
      .catch(() => {});
  };

  const groupedData = data?.reduce<Record<string, GraphNodeSearchResult[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {}) ?? {};

  const options = Object.entries(groupedData).map(([category, items]) => (
    <Combobox.Group label={category} key={category}>
      {items.map((option) => (
        <Combobox.Option value={option.id} key={option.id}>
          <Text size="sm" fw={500}>{option.result}</Text>
          {option.result !== option.id && (
            <Text size="xs" c="dimmed">{option.id}</Text>
          )}
        </Combobox.Option>
      ))}
    </Combobox.Group>
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
        onOptionSubmit={async (optionValue) => {
          const option = data?.find((item) => item.id === optionValue);
          combobox.closeDropdown();
          if (!option) return;
          setValue(option.result);
          const node = await fetchGraphNode(driver, option.id, config.node);
          if (node) {
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
