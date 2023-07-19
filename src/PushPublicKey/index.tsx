import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";

export default function PushPublicKey() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Notificaciones Push Publicas"
            variant="outlined"
            placeholder="Ejemplo: BCpydRHUAOHdaKJlur_TF9Wsd99Y0VG7pJdvrE-maYXMXYfjyo90HGmX7bwnnfFqZ-6wUXzo"
          />
        )}
        defaultValue={""}
        name="PUSH_PUBLIC_KEY"
        control={hook.form.control}
      />
      <FormHelperText>
        [PUSH_PUBLIC_KEY] Key de las notificaciones push que necesita el cliente. 
        <a target="_blank" href="https://www.npmjs.com/package/web-push">Guia para generar este campo</a>
      </FormHelperText>
    </>
  );
}
