import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function JwtWord() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="JWT"
            variant="outlined"
            placeholder="Ejemplo: palabraSecretaCliente"
          />
        )}
        defaultValue={""}
        name="JWT_WORD"
        control={hook.form.control}
      />
      <FormHelperText>
        [JWT_WORD] Firma secreta para el jwt que permite la autorizacion y autenticacion de
        los datos de usuarios que intenten acceder a la informacion. (Para el
        access token)
      </FormHelperText>

      {hook.form.formState.errors.JWT_WORD ? (
        <Alert severity="error">{`${hook.form.formState.errors.JWT_WORD.message}`}</Alert>
      ) : null}
    </>
  );
}
