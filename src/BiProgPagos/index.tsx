import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function BiProgPagos() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Reporte BI Programación de pagos"
            variant="outlined"
            color="secondary"
          />
        )}
        defaultValue={null}
        name="REACT_APP_BI_PROG_PAGOS"
        control={hook.form.control}
      />
      <FormHelperText>
        [REACT_APP_BI_PROG_PAGOS] Liga url de bi para el reporte de programacion. <b>La liga del iframe</b>
        de pagos
      </FormHelperText>

      {hook.form.formState.errors.REACT_APP_BI_PROG_PAGOS ? (
        <Alert severity="error">{`${hook.form.formState.errors.REACT_APP_BI_PROG_PAGOS.message}`}</Alert>
      ) : null}
    </>
  );
}
