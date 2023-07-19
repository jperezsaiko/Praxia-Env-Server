import { TextField } from "@mui/material";
import { useContext } from "react";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import Alert from "@mui/material/Alert";

export default function AzureFunctionUrl() {
  const hook = useContext(Context);

  if (hook.form === undefined) return <></>;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            id="azureFunctionsUrl"
            label="Azure Functions URL"
            variant="outlined"
            placeholder="Ejemplo: https://azurePdfTesting.azurewebsites.net/api/"
          />
        )}
        defaultValue={""}
        name="AZ_FUNTIONS_URL"
        control={hook.form.control}
      />
      <FormHelperText>[AZ_FUNTIONS_URL] Url para generar ciertos documentos pdf</FormHelperText>

      {hook.form.formState.errors.AZ_FUNTIONS_URL && (
        <Alert severity="error">{`${hook.form.formState.errors.AZ_FUNTIONS_URL.message}`}</Alert>
      )}
    </>
  );
}
