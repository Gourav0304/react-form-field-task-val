import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FormInputProps } from 'types/FormProps';

export const FormInputText = ({ name, control, label, textFieldProps, rules }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          size={'small'}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant={'outlined'}
          {...textFieldProps}
        />
      )}
    />
  );
};
