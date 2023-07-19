import React, { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function ContractRenovation() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Url contrato"
            variant="outlined"
            placeholder="Ejemplo: https://praxiatriggers.azurewebsites.net/api/AzF-ContractTestin2023"
          />
        )}
        defaultValue={""}
        name="URL_CONTRACT_AZURE"
        control={hook.form.control}
      />
      <FormHelperText>
      [ROBOT]  Url del servicio de azure function para la
        renovacion de los contratos.
      </FormHelperText>

      {hook.form.formState.errors.URL_CONTRACT_AZURE ? (
        <Alert severity="error">{`${hook.form.formState.errors.URL_CONTRACT_AZURE.message}`}</Alert>
      ) : null}

      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Ket contrato"
            variant="outlined"
            placeholder="Ejemplo: E2kMH3u1F-EejloD6FB1R44JxvqaDeK9fyjBSUG4eQt1t1A=="
          />
        )}
        defaultValue={""}
        name="KEY_CONTRACT_AZURE"
        control={hook.form.control}
      />
      <FormHelperText>
      [ROBOT]  Son las credenciales para tener acceso a las
        peticiones del Url de azure function para la renovacion de contratos
      </FormHelperText>

      {hook.form.formState.errors.KEY_CONTRACT_AZURE ? (
        <Alert severity="error">{`${hook.form.formState.errors.KEY_CONTRACT_AZURE.message}`}</Alert>
      ) : null}
    </>
  );
}
