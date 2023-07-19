import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function MailjetApiSecret() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Mailjet api secret"
            variant="outlined"
            placeholder="Ejemplo: 28a959bf8400b09798f1689"
          />
        )}
        defaultValue={""}
        name="MAILJET_APPI_SECRET"
        control={hook.form.control}
      />
      <FormHelperText>
        [MAILJET_APPI_SECRET] Mailjet api secret para poder enviar correos desde el servidor con la
        cuenta de mailjet indicada (credencial de uso)
      </FormHelperText>

      {hook.form.formState.errors.MAILJET_APPI_SECRET ? (
        <Alert severity="error">{`${hook.form.formState.errors.MAILJET_APPI_SECRET.message}`}</Alert>
      ) : null}
    </>
  );
}
