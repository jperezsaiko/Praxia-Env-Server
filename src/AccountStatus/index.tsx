import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function AccountStatus() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Key estado de cuenta"
            variant="outlined"
            placeholder="Ejemplo: E2kloD6FB1R44JxvqaDeK9fyjBSUG4eQt1t1A=="
          />
        )}
        defaultValue={""}
        name="PDF_BANK_ACCOUNT_STATUS"
        control={hook.form.control}
      />
      <FormHelperText>
        [PDF_BANK_ACCOUNT_STATUS] Son las credenciales para poder generar el pdf (con puppeter) del estado
        de cuenta de una cuenta de banco
      </FormHelperText>

      {hook.form.formState.errors.PDF_BANK_ACCOUNT_STATUS ? (
        <Alert severity="error">{`${hook.form.formState.errors.PDF_BANK_ACCOUNT_STATUS.message}`}</Alert>
      ) : null}
    </>
  );
}
