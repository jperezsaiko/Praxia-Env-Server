import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import Alert from "@mui/material/Alert";
import { FormHelperText } from "@mui/material";

export default function AccessTokenName() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Nombre de access token"
            variant="outlined"
          />
        )}
        defaultValue={"60s"}
        name="ACCESS_TOKEN_NAME"
        control={hook?.form?.control}
      />
      <FormHelperText>
        [ACCESS_TOKEN_NAME] Nombre para identificar el access token del cliente
      </FormHelperText>
      {hook?.form?.formState?.errors?.ACCESS_TOKEN_NAME?.message ? (
        <Alert severity="error">
          {hook?.form?.formState?.errors?.ACCESS_TOKEN_NAME?.message}
        </Alert>
      ) : null}
    </>
  );
}
