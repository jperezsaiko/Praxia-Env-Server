import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function BiVentasCompras() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Reporte BI Compras/Ventas"
            variant="outlined"
            color="secondary"
          />
        )}
        defaultValue={null}
        name="REACT_APP_BI_COMPRAS"
        control={hook.form.control}
      />
      <FormHelperText>
        [REACT_APP_BI_COMPRAS/REACT_APP_BI_VENTAS] Liga url del <b>iframe</b>
        para poder incluir los reportes bi al sistema, este campo es opcional (esta liga aplica para
        compras y ventas)
      </FormHelperText>

      {hook.form.formState.errors.REACT_APP_BI_COMPRAS ? (
        <Alert severity="error">{`${hook.form.formState.errors.REACT_APP_BI_COMPRAS.message}`}</Alert>
      ) : null}
    </>
  );
}
