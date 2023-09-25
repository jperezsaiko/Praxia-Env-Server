import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function ToDoKeyRobot() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Key To Do Robot"
            variant="outlined"
            placeholder="Ejemplo: E2kMH3u1F-EejloD6FBeK9fyjBSUG4eQt1t1A=="
          />
        )}
        defaultValue={""}
        name="TODO_KEY_ROBOT"
        control={hook.form.control}
      />
      <FormHelperText>
        [TODO_KEY_ROBOT] Credencial para poder ejecutar Azure Functions que renueva los ToDo
      </FormHelperText>

      {hook.form.formState.errors.TODO_KEY_ROBOT ? (
        <Alert severity="error">{`${hook.form.formState.errors.TODO_KEY_ROBOT.message}`}</Alert>
      ) : null}
    </>
  );
}
