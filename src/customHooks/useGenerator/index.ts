import { useForm } from "react-hook-form";
import schemaValidation from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { EnvValues, EnvValuesFile, StateGenerator } from "./types";
import { downloadBlob } from "../../helpers/files/index";
import { useState } from "react";

export const INITIAL_STATE = {
  customDomains: [],
};

const FRONT_END_CONFIG = {
  validateClosePeriodDate: true,
  idleSessionInMs: 300000,
  checkPermissions: true,
  mode: "test",
};

const FRONT_END_ENV = {
  REACT_APP_BACKEND: "http://localhost:8080/api/",
  REACT_APP_BACKGROUND:
    "https://res.cloudinary.com/dx5becozb/image/upload/v1670885774/img/background_enakxr.jpg",
  REACT_APP_CHECK_PERMISSIONS: 1,
  REACT_APP_CONFIG: FRONT_END_CONFIG,
  REACT_APP_EMAIL_FROM: "redex@praxia.com",
  REACT_APP_ENTERPRISE_NAME: "Cliente Praxia",
  REACT_APP_FRONTEND: "http://localhost:3000/",
  REACT_APP_LOGO_ENTERPRISE:
    "https://res.cloudinary.com/dmtvwe2ur/image/upload/v1638806661/Assets-praxia/logo_saiko_o6yjhu.png ",
  REACT_APP_LOGOEMPRESA:
    "https://res.cloudinary.com/dx5becozb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1670885704/img/saiko_wqpinn.jpg",
  REACT_APP_LOGOPRAXIA:
    "https://res.cloudinary.com/dx5becozb/image/upload/v1670885704/img/praxia_yx4xyn.png",
  REACT_APP_URL_BACKEND: "http://localhost:8080",
};

const defaultValues = {
  ACCESS_TOKEN_DURATION: "60s",
  ACCESS_TOKEN_NAME: "praxiaAcessToken",
  REFRESH_TOKEN_NAME: "praxiaRefreshToken",
  DEFAULT_PROFILE_PICTURE:
    "https://media-exp1.licdn.com/dms/image/C510BAQFp5o89_Xitsw/company-logo_200_200/0/1519872355832?e=2147483647&v=beta&t=g8PFJuWlBHrqWNLz5tLcH_vvULkKHlDZWehztKnsFGs",
};

export default function useGenerator() {
  const form = useForm<EnvValues>({
    defaultValues,
    mode: "all",
    resolver: yupResolver(schemaValidation),
  });

  const [state, setState] = useState<StateGenerator>(INITIAL_STATE);

  const addDomain = (domain: string, validate = true) => {
    const regex = /^https:\/\/.*/;
    if (regex.test(domain) || validate === false) {
      setState((current) => ({
        ...current,
        customDomains: [...current.customDomains, domain],
      }));
      return true;
    }
    return false;
  };

  const setEnvValues = (values: EnvValuesFile) => {
    form.setValue("ACCESS_TOKEN_NAME", values.ACCESS_TOKEN_NAME);
    form.setValue("AZ_FUNTIONS_URL", values.AZ_FUNTIONS_URL);
    form.setValue("BLOB_STORAGE_KEY", values.BLOB_STORAGE_KEY);
    form.setValue("DB_NAME", values.DB_NAME);
    form.setValue("DB_PASSWORD", values.DB_PASSWORD);
    form.setValue("DB_USER", values.DB_USER);
    form.setValue("DEFAULT_PROFILE_PICTURE", values.DEFAULT_PROFILE_PICTURE);
    form.setValue("ENCRYPTION_METHOD", values.ENCRYPTION_METHOD);
    form.setValue("EXCEL_PASSWORD", values.EXCEL_PASSWORD);
    form.setValue("FACTURAMA_3", values.FACTURAMA_3);
    form.setValue("FACTURAMA_MAKE_CALLS", values.FACTURAMA_MAKE_CALLS);
    form.setValue("FACTURAMA_PASSWORD", values.FACTURAMA_PASSWORD);
    form.setValue("FACTURAMA_PRODUCTION", values.FACTURAMA_PRODUCTION);
    form.setValue("FACTURAMA_USER", values.FACTURAMA_USER);
    form.setValue("GITHUB_TOKEN", values.GITHUB_TOKEN);
    form.setValue("IS_PRODUCTION", values.IS_PRODUCTION);
    form.setValue("JWT_WORD", values.JWT_WORD);
    form.setValue("KEY_BIRTHDAY_AZURE", values.ROBOT.birthday.url);
    form.setValue("KEY_CONTRACT_AZURE", values.ROBOT.contract.key);
    form.setValue("KEY_TC_AZURE", values.ROBOT.tc.key);
    form.setValue("MAILJET_APPI_KEY", values.MAILJET_APPI_KEY);
    form.setValue("MAILJET_APPI_SECRET", values.MAILJET_APPI_SECRET);
    form.setValue("MAILJET_EMAIL_FROM", values.MAILJET_EMAIL_FROM);
    form.setValue("PDF_API_KEY", values.PDF_API_KEY);
    form.setValue(
      "PDF_BANK_ACCOUNT_MOVEMENTS",
      values.PDF_BANK_ACCOUNT_MOVEMENTS
    );
    form.setValue("PDF_BANK_ACCOUNT_STATUS", values.PDF_BANK_ACCOUNT_STATUS);
    form.setValue("PDF_DOWNLOAD_API_KEY", values.PDF_DOWNLOAD_API_KEY);
    form.setValue("PUSH_PRIVATE_KEY", values.PUSH_PRIVATE_KEY);
    form.setValue("PUSH_PUBLIC_KEY", values.PUSH_PUBLIC_KEY);
    form.setValue("REFRESH_TOKEN_NAME", values.REFRESH_TOKEN_NAME);
    form.setValue("REFRESH_TOKEN_WORD", values.REFRESH_TOKEN_WORD);
    form.setValue("ROBOT_CONTRACT", values.ROBOT_CONTRACT);
    form.setValue("SECRET_IV", values.SECRET_IV);
    form.setValue("SECRET_KEY", values.SECRET_KEY);
    form.setValue("SERVER", values.SERVER);
    form.setValue("TODO_KEY_ROBOT", values.ROBOT.todo.key);
    form.setValue("TODO_ROBOT_URL", values.ROBOT.todo.url);
    form.setValue("TZ", values.TZ);
    form.setValue("URL_BIRTHDAY_AZURE", values.ROBOT.birthday.url);
    form.setValue("URL_CONTRACT_AZURE", values.ROBOT.contract.url);
    form.setValue("URL_FRONT", values.URL_FRONT.split(",")[0]);
    form.setValue("URL_SERVER", values.URL_SERVER);
    form.setValue("URL_TC_AZURE", values.ROBOT.tc.url);

    const domains = values.URL_FRONT.split(",").filter(
      (url, index) => index >= 1
    );

    domains.forEach((domain) => addDomain(domain, false));
  };

  const attemptCreateEnvFile = (envParams: EnvValues) => {
    const ROBOT = {
      contract: {
        url: envParams.URL_CONTRACT_AZURE,
        key: envParams.KEY_CONTRACT_AZURE,
      },
      tc: {
        url: envParams.URL_TC_AZURE,
        key: envParams.KEY_TC_AZURE,
      },
      birthday: {
        url: envParams.URL_BIRTHDAY_AZURE,
        key: envParams.KEY_BIRTHDAY_AZURE,
      },
      todo: {
        url: envParams.TODO_ROBOT_URL,
        key: envParams.TODO_KEY_ROBOT,
      },
    };

    const customDomainCsv = state.customDomains.reduce(
      (csv, url) => (csv += `,${url}`),
      ""
    );

    const parsedEnvFile = `
    ACCESS_TOKEN_DURATION=${envParams.ACCESS_TOKEN_DURATION}
    ACCESS_TOKEN_NAME=${envParams.ACCESS_TOKEN_NAME}
    AZ_FUNTIONS_URL = ${envParams.AZ_FUNTIONS_URL}
    BLOB_STORAGE_KEY=${envParams.BLOB_STORAGE_KEY}
    DB_NAME=${envParams.DB_NAME}
    DB_PASSWORD=${envParams.DB_PASSWORD}
    DB_USER=${envParams.DB_USER}
    DEFAULT_PROFILE_PICTURE=${envParams.DEFAULT_PROFILE_PICTURE}
    ENCRYPTION_METHOD = ${envParams.ENCRYPTION_METHOD}
    EXCEL_PASSWORD = ${window.crypto.randomUUID().replace("-", "")}
    FACTURAMA_3=https://apisandbox.facturama.mx
    FACTURAMA_MAKE_CALLS=${envParams.FACTURAMA_MAKE_CALLS ? "true" : "false"}
    FACTURAMA_PASSWORD=${envParams.FACTURAMA_PASSWORD}
    FACTURAMA_PRODUCTION=${envParams.IS_PRODUCTION ? "true" : "false"}
    FACTURAMA_TOKEN=${btoa(
      envParams.FACTURAMA_USER + ":" + envParams.FACTURAMA_PASSWORD
    )}
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
    PDF_DOWNLOAD_API_KEY = ${envParams.PDF_DOWNLOAD_API_KEY}
    PUSH_PRIVATE_KEY = ${envParams.PUSH_PRIVATE_KEY}
    PUSH_PUBLIC_KEY = ${envParams.PUSH_PUBLIC_KEY}
    REFRESH_TOKEN_NAME = ${envParams.REFRESH_TOKEN_NAME}
    REFRESH_TOKEN_WORD = ${envParams.REFRESH_TOKEN_WORD}
    ROBOT = ${JSON.stringify(ROBOT)}
    SERVER = ${envParams.SERVER}
    TZ = America/Monterrey
    URL_FRONT = ${envParams.URL_FRONT}${customDomainCsv}
    URL_SERVER = ${envParams.URL_SERVER}
    SECRET_KEY = ${envParams.SECRET_KEY}
    SECRET_IV = ${envParams.SECRET_IV}
    `;

    const file = new Blob([parsedEnvFile], { type: "text/plain" });

    const FRONT_END_ENV_FILE = `
      REACT_APP_BACKEND = ${envParams.URL_SERVER}/api/
      REACT_APP_BACKGROUND = https://res.cloudinary.com/dx5becozb/image/upload/v1670885774/img/background_enakxr.jpg
      REACT_APP_CHECK_PERMISSIONS = 1
      REACT_APP_CONFIG = ${JSON.stringify(FRONT_END_CONFIG)}
      REACT_APP_EMAIL_FROM = redes@praxia.mx
      REACT_APP_ENTERPRISE_NAME = Cliente Praxia
      REACT_APP_FRONTEND = ${envParams.URL_FRONT}/
      REACT_APP_LOGO_ENTERPRISE = https://res.cloudinary.com/dmtvwe2ur/image/upload/v1638806661/Assets-praxia/logo_saiko_o6yjhu.png
      REACT_APP_LOGOEMPRESA = https://res.cloudinary.com/dx5becozb/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1670885704/img/saiko_wqpinn.jpg
      REACT_APP_LOGOPRAXIA = https://res.cloudinary.com/dx5becozb/image/upload/v1670885704/img/praxia_yx4xyn.png
      REACT_APP_URL_BACKEND = ${envParams.URL_SERVER}
    `;

    const frontend = new Blob([FRONT_END_ENV_FILE], { type: "text/plain" });

    downloadBlob(file, "Praxia Backend Env Variables");
    downloadBlob(frontend, "Praxia Frontend Env Variables");
  };

  return {
    form,
    attemptCreateEnvFile,
    addDomain,
    state,
    setEnvValues,
  };
}
