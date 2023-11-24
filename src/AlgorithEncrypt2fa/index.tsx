import { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { FormHelperText, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";
import { Context } from "../App";
import Alert from "@mui/material/Alert";

export default function AlgorithEncrypt2fa() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <InputLabel >Algoritmo encriptacion 2FA</InputLabel>
      <Controller
        render={({ field }) => (
          <Select
            {...field}
            id={window.crypto.randomUUID()}
            label="Algoritmo encriptacion 2FA"
          >
            <MenuItem value={"aes-256-cbc"}>Advanced Encryption Standard 256 Bits</MenuItem>
          </Select>
        )}
        defaultValue={"aes-256-cbc"}
        name="ENCRYPTION_METHOD"
        control={hook.form.control}
      />
      <FormHelperText>
        [ENCRYPTION_METHOD] Método de encriptacion para el 2FA de los usuarios que pudieron hacer el proceso con exito. Sirve para validar las encriptaciones del 2FA.
      </FormHelperText>

      
      {hook.form.formState.errors.ENCRYPTION_METHOD ? (
        <Alert severity="error">{`${hook.form.formState.errors.ENCRYPTION_METHOD.message}`}</Alert>
      ) : null}
    </>
  );
}
