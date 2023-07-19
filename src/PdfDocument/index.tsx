import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function KeyDocuments() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Key documentos (descarga)"
            variant="outlined"
            placeholder="Ejemplo: E2kMH3u1F-EejloD6FB1R44JxvqaDeK9fyjBSUG4eQt1t1A=="
          />
        )}
        defaultValue={""}
        name="PDF_DOWNLOAD_API_KEY"
        control={hook.form.control}
      />
      <FormHelperText>
        [PDF_DOWNLOAD_API_KEY] Son las credenciales para poder <b>DESCARGAR</b> el pdf (con puppeter) de los
        documentos (cotizacion, pedidos, etc.) creados
      </FormHelperText>

      {hook.form.formState.errors.PDF_DOWNLOAD_API_KEY ? (
        <Alert severity="error">{`${hook.form.formState.errors.PDF_DOWNLOAD_API_KEY.message}`}</Alert>
      ) : null}
    </>
  );
}
