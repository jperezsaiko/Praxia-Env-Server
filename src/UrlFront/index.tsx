import { TextField } from "@mui/material";
import { useContext } from "react";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import Alert from "@mui/material/Alert";

export default function UrlFront() {
  const hook = useContext(Context);

  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            id="urlServer"
            label="URL cliente (UI)"
            variant="outlined"
            placeholder="Ejemplo: https://saikointranetfront.azurewebsites.net"
          />
        )}
        defaultValue={""}
        name="URL_FRONT"
        control={hook.form.control}
      />
      <FormHelperText>
        [URL_FRONT] URL del cliente con la UI del sistema. Este deber ser el dominio origanl que otorga el hosting (en este caso Microsoft)
        <b>El url NO debe terminar con diagonal</b>
      </FormHelperText>

      {hook.form.formState.errors.URL_FRONT && (
        <Alert severity="error">{`${hook.form.formState.errors.URL_FRONT.message}`}</Alert>
      )}
    </>
  );
}
