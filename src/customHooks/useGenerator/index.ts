import { useForm } from "react-hook-form";
import schemaValidation from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { EnvValues } from "./types";
import { downloadBlob } from "../../helpers/files/index";

const defaultValues = {
  ACCESS_TOKEN_DURATION: "60s",
  ACCESS_TOKEN_NAME: "praxiaAcessToken",
  REFRESH_TOKEN_NAME: "praxiaRefreshToken",
  DEFAULT_PROFILE_PICTURE:"https://media-exp1.licdn.com/dms/image/C510BAQFp5o89_Xitsw/company-logo_200_200/0/1519872355832?e=2147483647&v=beta&t=g8PFJuWlBHrqWNLz5tLcH_vvULkKHlDZWehztKnsFGs"
};

export default function useGenerator() {
  const form = useForm<EnvValues>({
    defaultValues,
    mode: "all",
    resolver: yupResolver(schemaValidation),
  });

  const attemptCreateEnvFile = (envParams: EnvValues) => {

    const ROBOT = {
      contract:{
        url:envParams.URL_CONTRACT_AZURE,
        key:envParams.KEY_CONTRACT_AZURE
      },
      tc:{
        url:envParams.URL_TC_AZURE,
        key:envParams.KEY_TC_AZURE
      },
      birthday:{
        url:envParams.URL_BIRTHDAY_AZURE,
        key:envParams.KEY_BIRTHDAY_AZURE
      },
      todo:{
        url:envParams.TODO_ROBOT_URL,
        key:envParams.TODO_KEY_ROBOT
      }
    }

    const parsedEnvFile = `
    ACCESS_TOKEN_DURATION=${envParams.ACCESS_TOKEN_DURATION}
    ACCESS_TOKEN_NAME=${envParams.ACCESS_TOKEN_NAME}
    AZ_FUNTIONS_URL = ${envParams.AZ_FUNTIONS_URL}
    BLOB_STORAGE_KEY=${envParams.BLOB_STORAGE_KEY}
    DB_NAME=${envParams.DB_NAME}
    DB_PASSWORD=${envParams.DB_PASSWORD}
    DB_USER=${envParams.DB_USER}
    DEFAULT_PROFILE_PICTURE=${envParams.DEFAULT_PROFILE_PICTURE}
    EXCEL_PASSWORD = ${window.crypto.randomUUID().replace('-','')}
    FACTURAMA_3=https://apisandbox.facturama.mx
    FACTURAMA_MAKE_CALLS=${envParams.FACTURAMA_MAKE_CALLS ? "true" : "false"}
    FACTURAMA_PASSWORD=${envParams.FACTURAMA_PASSWORD}
    FACTURAMA_PRODUCTION=${envParams.IS_PRODUCTION ? "true" : "false"}
    FACTURAMA_TOKEN=${btoa(envParams.FACTURAMA_USER+':'+envParams.FACTURAMA_PASSWORD)}
    FACTURAMA_URL = https://apisandbox.facturama.mx/2
    FACTURAMA_USER = ${envParams.FACTURAMA_USER}
    GITHUB_TOKEN = ${envParams.GITHUB_TOKEN}
    INITIALIZE_WHATSAPP = jperez@saiko.mx
    IS_PRODUCTION = si
    JWT_WORD = ${envParams.JWT_WORD}
    MAILJET_APPI_KEY = ${envParams.MAILJET_APPI_KEY}
    MAILJET_APPI_SECRET = ${envParams.MAILJET_APPI_SECRET}
    MAILJET_EMAIL_FROM = ${envParams.MAILJET_EMAIL_FROM}
    PDF_API_KEY = ${envParams.PDF_API_KEY}
    PDF_BANK_ACCOUNT_MOVEMENTS = ${envParams.PDF_BANK_ACCOUNT_MOVEMENTS}
    PDF_BANK_ACCOUNT_STATUS = ${envParams.PDF_BANK_ACCOUNT_STATUS}
    PDF_DOWNLOAD_API_KEY = ${envParams.PDF_DOWNLOAD_API_KEY }
    PUSH_PRIVATE_KEY = ${envParams.PUSH_PRIVATE_KEY}
    PUSH_PUBLIC_KEY = ${envParams.PUSH_PUBLIC_KEY}
    REFRESH_TOKEN_NAME = ${envParams.REFRESH_TOKEN_NAME}
    REFRESH_TOKEN_WORD = ${envParams.REFRESH_TOKEN_WORD}
    ROBOT = ${JSON.stringify(ROBOT)}
    SERVER = ${envParams.SERVER}
    TZ = America/Monterrey
    URL_FRONT = ${envParams.URL_FRONT}
    URL_SERVER = ${envParams.URL_SERVER}
    SECRET_KEY = ${envParams.SECRET_KEY}
    SECRET_IV = ${envParams.SECRET_IV}
    `;

    const file = new Blob([parsedEnvFile], { type: "text/plain" });

    downloadBlob(file, "Praxia Backend Env Variables");

    console.log(envParams, parsedEnvFile);
  };

  return {
    form,
    attemptCreateEnvFile,
  };
}
