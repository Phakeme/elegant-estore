import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ label, required, name }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => (
          <TextField {...field} label={label} required={required} />
        )}
        control={control}
        fullWidth
        name={name}
      />
    </Grid>
  );
};

export default FormInput;
