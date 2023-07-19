import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import Alert from "@mui/material/Alert";
import { FormHelperText } from "@mui/material";

export default function PdfApiKey() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Pdf api key"
            variant="outlined"
          />
        )}
        defaultValue={""}
        name="PDF_API_KEY"
        control={hook.form.control}
      />

      <FormHelperText>
        [PDF_API_KEY] Key del campo 'Azure Functions URL' para poder hacer las llamada de PDF
      </FormHelperText>

      {hook.form.formState.errors.PDF_API_KEY && (
        <Alert severity="error">{`${hook.form.formState.errors.PDF_API_KEY.message}`}</Alert>
      )}
    </>
  );
}
