import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function RefreshTokeName() {
  const hook = useContext(Context);

  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Nombre de refresh token"
            variant="outlined"
          />
        )}
        name="REFRESH_TOKEN_NAME"
        control={hook.form.control}
      />
      <FormHelperText>
        [REFRESH_TOKEN_NAME] Nombre del refresh token para los inicios de sesion
      </FormHelperText>

      {hook.form.formState.errors.REFRESH_TOKEN_NAME ? (
        <Alert severity="error">{`${hook.form.formState.errors.REFRESH_TOKEN_NAME.message}`}</Alert>
      ) : null}
    </>
  );
}
