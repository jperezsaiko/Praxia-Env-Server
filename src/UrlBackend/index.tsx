import { TextField } from "@mui/material";
import { useContext } from "react";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import Alert from "@mui/material/Alert";

export default function UrlBackend() {
  const hook = useContext(Context);

  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            id="urlServer"
            label="URL servidor (api)"
            variant="outlined"
            placeholder="Ejemplo: https://saikointranetback.azurewebsites.net"
          />
        )}
        defaultValue={""}
        name="URL_SERVER"
        control={hook.form.control}
      />
      <FormHelperText>[URL_SERVER] URL del backend para el funcionamiento de Praxia. <b>El url NO debe terminar con diagonal</b></FormHelperText>

      {hook.form.formState.errors.URL_SERVER && (
        <Alert severity="error">{`${hook.form.formState.errors.URL_SERVER.message}`}</Alert>
      )}
    </>
  );
}
