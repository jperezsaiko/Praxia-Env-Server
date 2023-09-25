import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function TwoFactorSecretIv() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="2FA secret iv"
            variant="outlined"
            placeholder="Ejemplo: mysecretivafordata"
          />
        )}
        defaultValue={""}
        name="SECRET_IV"
        control={hook.form.control}
      />
      <FormHelperText>
        [SECRET_IV] Palabra secreta para encriptar los dispositivos con 2FA. Es importante que una vez establecida esta variable de entorno. NO SE debe de cambiar, de lo contrario algunos usuarios tendrian que reiniciar el proceso de 2FA con ayuda de soporte borrando sus altas de la BD
      </FormHelperText>

      {hook.form.formState.errors.SECRET_IV ? (
        <Alert severity="error">{`${hook.form.formState.errors.SECRET_IV.message}`}</Alert>
      ) : null}
    </>
  );
}
