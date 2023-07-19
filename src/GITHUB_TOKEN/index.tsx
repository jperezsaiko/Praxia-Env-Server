import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function GithubToken() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Github token"
            variant="outlined"
            placeholder="Ejemplo: ghp_o5TITAKPsNogYtyLrAIWCvT3GNuAn"
          />
        )}
        defaultValue={""}
        name="GITHUB_TOKEN"
        control={hook.form.control}
      />
      <FormHelperText>
        [GITHUB_TOKEN] Token para permitir a la instancia de Praxia llevar un control de
        versionamiento. (Recomendado)
      </FormHelperText>

      {hook.form.formState.errors.GITHUB_TOKEN && (
        <Alert severity="error">{`${hook.form.formState.errors.GITHUB_TOKEN.message}`}</Alert>
      )}
    </>
  );
}
