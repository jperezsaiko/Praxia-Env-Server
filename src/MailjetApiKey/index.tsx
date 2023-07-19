import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function MailjetApiKey() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Mailjet api key"
            variant="outlined"
            placeholder="Ejemplo: a84d08eG2Ab3f244bd98471"
          />
        )}
        defaultValue={""}
        name="MAILJET_APPI_KEY"
        control={hook.form.control}
      />
      <FormHelperText>
        [MAILJET_APPI_KEY] Mailjet api key secreta para poder enviar correos desde el servidor con
        la cuenta de mailjet indicada (credencial de uso)
      </FormHelperText>

      {hook.form.formState.errors.MAILJET_APPI_KEY ? (
        <Alert severity="error">{`${hook.form.formState.errors.MAILJET_APPI_KEY.message}`}</Alert>
      ) : null}
    </>
  );
}
