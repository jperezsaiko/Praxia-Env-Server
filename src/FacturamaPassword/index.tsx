import React, { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import Alert from "@mui/material/Alert";
import { FormHelperText } from "@mui/material";

export default function FacturamaPassword() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Contraseña facturama"
            variant="outlined"
          />
        )}
        defaultValue={""}
        name="FACTURAMA_PASSWORD"
        control={hook.form.control}
      />

      <FormHelperText>
        [FACTURAMA_PASSWORD] Contraseña de la cuenta del PAC para hacer facturacion
      </FormHelperText>

      {hook.form.formState.errors.FACTURAMA_PASSWORD && (
        <Alert severity="error">{`${hook.form.formState.errors.FACTURAMA_PASSWORD.message}`}</Alert>
      )}
    </>
  );
}
