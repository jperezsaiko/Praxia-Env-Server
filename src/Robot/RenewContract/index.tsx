import { useContext } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Context } from "../../App";

export default function RenewContract() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <Controller
      render={({ field }) => (
        <TextField
        {...field}
          margin="normal"
          label="URL Robot Renovacion Contrato"
          variant="outlined"
        />
      )}
      defaultValue={""}
      name="ROBOT_CONTRACT"
      control={hook.form.control}
    />
  );


}
