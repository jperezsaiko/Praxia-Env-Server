import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function PdfMovements() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Key pdf movimientos"
            variant="outlined"
            placeholder="Ejemplo: E2kMH3u1F-EejloD6FDeK9fyjBSUG4eQt1t1A=="
          />
        )}
        defaultValue={""}
        name="PDF_BANK_ACCOUNT_MOVEMENTS"
        control={hook.form.control}
      />
      <FormHelperText>
        [PDF_BANK_ACCOUNT_MOVEMENTS] Son las credenciales para poder generar el pdf (con puppeter) de los
        reportes de movimientos de una cuenta de banco.
      </FormHelperText>

      {hook.form.formState.errors.PDF_BANK_ACCOUNT_MOVEMENTS ? (
        <Alert severity="error">{`${hook.form.formState.errors.PDF_BANK_ACCOUNT_MOVEMENTS.message}`}</Alert>
      ) : null}
    </>
  );
}
