import { useState, useMemo, useEffect, useCallback } from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  InputAdornment,
} from '@mui/material';

const TYPES_LABELS = {
  iri: 'IRI',
  anon: 'Anonymous Node',
  str: 'String',
  int: 'Integer',
  float: 'Decimal',
  bool: 'Boolean',
};

const DEFAULT_VALUES = {
  iri: { input: "", value: "<>" },
  anon: { input: "", value: "_:" },
  str: { input: "", value: '""' },
  bool: { input: "true", value: "true" },
  int: { input: "0", value: "0" },
  float: { input: "0", value: "0" },
  default: { input: "", value: "" },
};

const ObjectTextField = ({ label, setValue, types }) => {
  const [typeValue, setTypeValue] = useState(types[0]);
  const [pendingType, setPendingType] = useState(types[0]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const { input, value } = DEFAULT_VALUES[pendingType] || DEFAULT_VALUES.default;
    setInputValue(input);
    setValue(value);
    setTypeValue(pendingType);
  }, [pendingType, setValue]);

  const handleInputChange = useCallback((e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    const formattedValue =
      typeValue === "iri" ? `<${newValue}>` :
      typeValue === "anon" ? `_:${newValue}` :
      typeValue === "str" ? `"${newValue}"` :
      newValue;

    setValue(formattedValue);
  }, [typeValue, setValue]);

  const inputField = useMemo(() => {
    const commonProps = {
      label: "Value",
      value: inputValue,
      onChange: handleInputChange,
      sx: { flex: 2 },
    };

    if (typeValue === "bool") {
      return (
        <TextField select {...commonProps}>
          <MenuItem value="true">True</MenuItem>
          <MenuItem value="false">False</MenuItem>
        </TextField>
      );
    }

    return (
      <TextField
        {...commonProps}
        type={typeValue === "int" || typeValue === "float" ? "number" : "text"}
        InputProps={{
          startAdornment:
            typeValue === "iri" ? <InputAdornment position="start">&lt;</InputAdornment> :
            typeValue === "anon" ? <InputAdornment position="start">_:</InputAdornment> :
            typeValue === "str" ? <InputAdornment position="start">"</InputAdornment> :
            null,
          endAdornment:
            typeValue === "iri" ? <InputAdornment position="end">&gt;</InputAdornment> :
            typeValue === "str" ? <InputAdornment position="end">"</InputAdornment> :
            null,
        }}
      />
    );
  }, [inputValue, typeValue, handleInputChange]);

  return (
    <Box>
      <Typography variant="body1" sx={{ mb: 1 }}>{label}</Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: 'flex', gap: 2 }}
      >
        <TextField
          select
          label="Type"
          value={typeValue}
          onChange={(event) => {
            setPendingType(event.target.value);
          }}
          fullWidth
          sx={{ flex: 1 }}
        >
          {types.map((type) => (
            <MenuItem key={type} value={type}>
              {TYPES_LABELS[type]}
            </MenuItem>
          ))}
        </TextField>
        {inputField}
      </Box>
    </Box>
  );
}

export default ObjectTextField;
