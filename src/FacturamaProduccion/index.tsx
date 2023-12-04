import { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { FormHelperText, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";
import { Context } from "../App";
import Alert from "@mui/material/Alert";

export default function FacturamaProduccion() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <InputLabel id="facturamaProduccion">Facturama (PRODUCCIÓN)</InputLabel>
      <Controller
        render={({ field }) => (
          <Select
            {...field}
            id={window.crypto.randomUUID()}
            labelId="facturamaProduccion"
            label="Facturama (PRODUCCIÓN)"
          >
            <MenuItem value={"true"}>Si</MenuItem>
            <MenuItem value={"false"}>No</MenuItem>
          </Select>
        )}
        defaultValue={false}
        name="FACTURAMA_PRODUCTION"
        control={hook.form.control}
      />
      <FormHelperText>
        [FACTURAMA_PRODUCTION] <b>En el caso de SI</b>, las llamadas al PAC{" "}
        <b>SI HARA FACTURAS REALES</b>. De lo contrario, seran llamadas de
        prueba (no validas fiscalmente, solo de pruebas en desarrollo)
      </FormHelperText>

      {hook.form.formState.errors.FACTURAMA_PRODUCTION ? (
        <Alert severity="error">{`${hook.form.formState.errors.FACTURAMA_PRODUCTION.message}`}</Alert>
      ) : null}
    </>
  );
}
