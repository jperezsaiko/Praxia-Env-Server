import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";

export default function FacturamaUrl() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="URL facturama (Deprecado)"
            variant="outlined"
            color="warning"
          />
        )}
        defaultValue={""}
        name="FACTURAMA_3"
        control={hook.form.control}
      />
      <FormHelperText>
        ⚠ Los URL del PAC de facturacion se generan en código de acuerdo a los
        parametros de facturacion
      </FormHelperText>
    </>
  );
}
