import React, { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../App";

export default function ExcelPassword() {
  const hook = useContext(Context);

  return (
    <Controller
      render={({ field }) => (
        <TextField
        {...field}
          margin="normal"
          label="Contraseña plantillas excel"
          variant="outlined"
        />
      )}
      defaultValue={""}
      name="EXCEL_PASSWORD"
      control={hook.form.control}
    />
  );


}
