import React, { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import Alert from "@mui/material/Alert";
import { FormHelperText } from "@mui/material";

export default function FacturamaUser() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Usuario facturama"
            variant="outlined"
          />
        )}
        defaultValue={""}
        name="FACTURAMA_USER"
        control={hook.form.control}
      />

      <FormHelperText>
        [FACTURAMA_USER] Usuario para iniciar sesion en el PAC de facturacion
      </FormHelperText>

      {hook.form.formState.errors.FACTURAMA_USER && (
        <Alert severity="error">{`${hook.form.formState.errors.FACTURAMA_USER.message}`}</Alert>
      )}
    </>
  );
}
