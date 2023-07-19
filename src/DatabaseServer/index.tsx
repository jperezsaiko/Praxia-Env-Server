import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import Alert from "@mui/material/Alert";
import { FormHelperText } from "@mui/material";

export default function DatabaseServer() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Servidor base de datos"
            variant="outlined"
            placeholder="Ejemplo: applicationsaiko.database.windows.net"
          />
        )}
        defaultValue={""}
        name="SERVER"
        control={hook.form.control}
      />

      <FormHelperText>
        [SERVER] Servidor para la cadena de conexion a la base de datos
      </FormHelperText>

      {hook.form.formState.errors.SERVER && (
        <Alert severity="error">{`${hook.form.formState.errors.SERVER.message}`}</Alert>
      )}
    </>
  );
}
