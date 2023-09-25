import { TextField } from "@mui/material";
import { useContext } from "react";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import Alert from "@mui/material/Alert";

export default function ToDoRobotUrl() {
  const hook = useContext(Context);

  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            id="todoRobotUrl"
            label="To Do Robot URL"
            variant="outlined"
            placeholder="Ejemplo: https://praxiatriggers.azurewebsites.net/api/AzF-ToDoRobot"
          />
        )}
        defaultValue={""}
        name="TODO_ROBOT_URL"
        control={hook.form.control}
      />
      <FormHelperText>[TODO_ROBOT_URL] Url para generar ciertos documentos pdf</FormHelperText>

      {hook.form.formState.errors.TODO_ROBOT_URL && (
        <Alert severity="error">{`${hook.form.formState.errors.TODO_ROBOT_URL.message}`}</Alert>
      )}
    </>
  );
}
