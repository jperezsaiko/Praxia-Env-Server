import React, { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { FormHelperText, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";
import { Context } from "../App";
import Alert from "@mui/material/Alert";

export default function FacturamaMakeCalls() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <InputLabel id="facturamaMakeCalls">Llamadas al PAC</InputLabel>
      <Controller
        render={({ field }) => (
          <Select
            {...field}
            id={window.crypto.randomUUID()}
            labelId="facturamaMakeCalls"
            label="Llamadas al PAC"
          >
            <MenuItem value={"true"}>Si</MenuItem>
            <MenuItem value={"false"}>No</MenuItem>
          </Select>
        )}
        defaultValue={false}
        name="FACTURAMA_MAKE_CALLS"
        control={hook.form.control}
      />
      <FormHelperText>
        [FACTURAMA_MAKE_CALLS] En el caso de seleccionar la opcion "No", las llamadas al PAC (sin
        importar el ambiente si es test, producccion) no se realizan y se
        utilizan datos dummys en ciertos procesos del sistema (timbre,
        complementos, etc)
      </FormHelperText>

      
      {hook.form.formState.errors.FACTURAMA_MAKE_CALLS ? (
        <Alert severity="error">{`${hook.form.formState.errors.FACTURAMA_MAKE_CALLS.message}`}</Alert>
      ) : null}
    </>
  );
}
