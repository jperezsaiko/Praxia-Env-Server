import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function OdcKey() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="PDF Orden de compra (key)"
            variant="outlined"
          />
        )}
        defaultValue={""}
        name="PDF_ODC"
        control={hook.form.control}
      />
      <FormHelperText>
        [PDF_ODC] Key para poder generar los reportes para los documentos de Orden de compra
      </FormHelperText>
      {hook.form.formState.errors.PDF_ODC && (
        <Alert severity="error">{`${hook.form.formState.errors.PDF_ODC.message}`}</Alert>
      )}
    </>
  );
}
