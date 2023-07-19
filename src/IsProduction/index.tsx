import { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function IsProduction() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <InputLabel id="isProduction">¿Es ambiente de produccion?</InputLabel>
      <Controller
        render={({ field }) => (
          <Select
            {...field}
            labelId="isProduction"
            label="¿Es ambiente de produccion?"
          >
            <MenuItem value={"si"}>Si</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        )}
        defaultValue={false}
        name="IS_PRODUCTION"
        control={hook.form.control}
      />
      <FormHelperText>
        [IS_PRODUCTION] ⚠ En el caso de "Si" , las llamadas a facturacion seran reales
      </FormHelperText>

      {hook.form.formState.errors.IS_PRODUCTION ? (
        <Alert severity="error">{`${hook.form.formState.errors.IS_PRODUCTION.message}`}</Alert>
      ) : null}
    </>
  );
}
