import { useContext } from "react";
import { useFilePicker } from "use-file-picker";
import { MuiFileInput } from "mui-file-input";
import { readEnvVariables } from "../helpers/files/index";
import { EnvValuesFile } from "../customHooks/useGenerator/types";
import { Context } from "../App";

export default function LoadFrontendParams() {
  const hook = useContext(Context);

  useFilePicker({
    accept: ".json",
    multiple: false,
  });

  const attemptRetrieveData = async (file: File | null) => {
    if (file instanceof File) {
      const envVariables: EnvValuesFile = await readEnvVariables(file);

      const parsed: EnvValuesFile = {
        ...envVariables,
        ROBOT: JSON.parse(`${envVariables.ROBOT}`),
      };

      hook.setEnvValues(parsed);
    }
  };

  return (
    <>
      <MuiFileInput
        size="small"
        fullWidth
        multiple={false}
        onChange={attemptRetrieveData}
        inputProps={{
          accept: "plain/text",
        }}
      ></MuiFileInput>
    </>
  );
}
