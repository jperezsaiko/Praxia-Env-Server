import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function BlobStorageKey() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            label="Blob Storage Key"
            variant="outlined"
          />
        )}
        defaultValue={""}
        name="BLOB_STORAGE_KEY"
        control={hook.form.control}
      />
      <FormHelperText>
        [BLOB_STORAGE_KEY] Importante configurar el servicio de blob storage en el portal de azure
        (cors) y los parametros en la base de datos
      </FormHelperText>
      {hook.form.formState.errors.BLOB_STORAGE_KEY && (
        <Alert severity="error">{`${hook.form.formState.errors.BLOB_STORAGE_KEY.message}`}</Alert>
      )}
    </>
  );
}
