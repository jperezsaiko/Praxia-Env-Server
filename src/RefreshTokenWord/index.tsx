import React, { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function RefreshTokenWord() {
  const hook = useContext(Context);

  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Palabra secreta refresh token"
            variant="outlined"
          />
        )}
        name="REFRESH_TOKEN_WORD"
        control={hook.form.control}
      />
      <FormHelperText>
        [REFRESH_TOKEN_WORD] Texto que se usara como firma para validar que el JWT fue generado por Praxia y no por un tercero (Para refresh token)
      </FormHelperText>

      {hook.form.formState.errors.REFRESH_TOKEN_WORD ? (
        <Alert severity="error">{`${hook.form.formState.errors.REFRESH_TOKEN_WORD.message}`}</Alert>
      ) : null}
    </>
  );
}
