import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export type FileDef = {
  id: string;
  name: string;
  content: string;
};

type FileManagerProps = {
  key: string;
};

export function useFileManager({ key }: FileManagerProps) {
  const [persistedFiles, setPersistedFiles] = useState<Record<string, FileDef>>(
    () => {
      const raw = localStorage.getItem(key);
      const loaded = raw ? (JSON.parse(raw) as Record<string, FileDef>) : {};
      return loaded;
    },
  );
  const [files, setFiles] = useState<Record<string, FileDef>>(persistedFiles);
  const [openFileIds, setOpenFileIds] = useState<string[]>([]);

  // autosync persitedfiles with localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(persistedFiles));
  }, [key, persistedFiles]);

  // Create a new file and return its id
  const createFile = ({
    name,
    content,
  }: {
    name?: string;
    content?: string;
  } = {}): string => {
    const id = uuidv4();
    const newFile: FileDef = { id, name: name ?? "", content: content ?? "" };
    setFiles((prev) => {
      const updated = { ...prev, [id]: newFile };
      return updated;
    });
    return id;
  };

  // Remove a file
  const removeFile = (id: string) => {
    setFiles((prev) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [id]: _, ...rest } = prev;
      const updated = { ...rest };
      return updated;
    });
    setPersistedFiles((prev) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [id]: _, ...rest } = prev;
      const updated = { ...rest };
      return updated;
    });
    setOpenFileIds((prev) => prev.filter((fid) => fid !== id));
  };

  // Update file content or name
  const updateFile = (
    {
      id,
      name,
      content,
    }: {
      id: string;
      name?: string;
      content?: string;
    },
    persist: boolean = false,
  ) => {
    setFiles((prev) => {
      const current = prev[id];
      if (!current) return prev;
      const updated = {
        ...prev,
        [id]: {
          ...current,
          name: name ?? current.name,
          content: content ?? current.content,
        },
      };
      if (persist) {
        setPersistedFiles((prev) => {
          return { ...prev, [id]: updated[id] };
        });
      }
      return updated;
    });
  };

  // Compare in-memory with persisted
  const hasChanges = useCallback(
    (id: string) => {
      const inMemory = files[id];
      const persisted = persistedFiles[id];
      return JSON.stringify(inMemory) !== JSON.stringify(persisted);
    },
    [files, persistedFiles],
  );

  // Manage opened files
  const openFile = useCallback((id: string) => {
    setOpenFileIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const closeFile = useCallback(
    (id: string) => {
      if (!persistedFiles[id]) {
        // remove unpersisted file
        setFiles((prev) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [id]: _, ...rest } = prev;
          const updated = { ...rest };
          return updated;
        });
      }
      setOpenFileIds((prev) => prev.filter((fid) => fid !== id));
    },
    [persistedFiles],
  );

  return {
    files,
    persistedFiles,
    openFileIds,
    createFile,
    removeFile,
    updateFile,
    hasChanges,
    openFile,
    closeFile,
  };
}
