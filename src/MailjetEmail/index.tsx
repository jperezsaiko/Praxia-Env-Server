import React, { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function MailjetEmail() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Email mailjet"
            variant="outlined"
            placeholder="Ejemplo: aalardin@saiko.mx"
          />
        )}
        defaultValue={""}
        name="MAILJET_EMAIL_FROM"
        control={hook.form.control}
      />
      <FormHelperText>
        [MAILJET_EMAIL_FROM] Email de la cuenta de mailjet para poder enviar correos en el sistema
        (Ordenes de compra, pedidos, etc)
      </FormHelperText>

      {hook.form.formState.errors.MAILJET_EMAIL_FROM ? (
        <Alert severity="error">{`${hook.form.formState.errors.MAILJET_EMAIL_FROM.message}`}</Alert>
      ) : null}
    </>
  );
}
