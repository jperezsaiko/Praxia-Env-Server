import React, { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";
import { Context } from "../App";
import { FormHelperText } from "@mui/material";

export default function AccessTokenDuration() {
  const hook = useContext(Context);
  if (hook.form === undefined) return <></>;

  return (
    <>
      <InputLabel id="accessTokenDuration">Access token duracion</InputLabel>
      <Controller
        render={({ field }) => (
          <Select
            {...field}
            labelId="accessTokenDuration"
            label="Access token duracion"
          >
            <MenuItem value={`${60 * 1}s`}>1 minuto</MenuItem>
            <MenuItem value={`${60 * 2}s`}>2 minuto</MenuItem>
            <MenuItem value={`${60 * 3}s`}>3 minuto</MenuItem>
            <MenuItem value={`${60 * 4}s`}>4 minuto</MenuItem>
            <MenuItem value={`${60 * 5}s`}>5 minuto</MenuItem>
          </Select>
        )}
        defaultValue={"60s"}
        name="ACCESS_TOKEN_DURATION"
        control={hook.form.control}
      />

      <FormHelperText>
        [ACCESS_TOKEN_DURATION] Duracion del access token antes de que expire
      </FormHelperText>
    </>
  );
}
