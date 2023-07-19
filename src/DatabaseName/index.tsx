import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import Alert from "@mui/material/Alert";
import { FormHelperText } from "@mui/material";

export default function DatebaseName() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Nombre de la base de datos"
            variant="outlined"
          />
        )}
        defaultValue={""}
        name="DB_NAME"
        control={hook.form.control}
      />

<FormHelperText>
        [DB_NAME] Nombre de la base de datos
      </FormHelperText>

      {hook.form.formState.errors.DB_NAME && (
        <Alert severity="error">{`${hook.form.formState.errors.DB_NAME.message}`}</Alert>
      )}
    </>
  );
}
