import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function PushPrivateKey() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Notificaciones Push Privadas"
            variant="outlined"
            placeholder="Ejemplo: DYF5930glJS5X-P0sxchk-Irjrem49O2N3uf0rbKZpa5ekc"
          />
        )}
        defaultValue={""}
        name="PUSH_PRIVATE_KEY"
        control={hook.form.control}
      />
      <FormHelperText>
        [PUSH_PRIVATE_KEY] Key de las notificaciones push que necesita el servidor.

        <a target="_blank" href="https://www.npmjs.com/package/web-push">Guia para generar este campo</a>

      </FormHelperText>

      {hook.form.formState.errors.PUSH_PRIVATE_KEY ? (
        <Alert severity="error">{`${hook.form.formState.errors.PUSH_PRIVATE_KEY.message}`}</Alert>
      ) : null}
    </>
  );
}
