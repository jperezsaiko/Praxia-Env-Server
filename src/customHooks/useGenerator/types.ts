import { UseFormReturn } from "react-hook-form";

interface AzureFunction {
  url: string;
  key: string;
}

export interface RobotEnvFile {
  contract: AzureFunction;
  tc: AzureFunction;
  birthday: AzureFunction;
  todo: AzureFunction;
}

export interface EnvValues {
  ACCESS_TOKEN_DURATION: string;
  ACCESS_TOKEN_NAME: string;
  AZ_FUNTIONS_URL: string;
  BLOB_STORAGE_KEY: string;
  DB_NAME: string;
  DB_PASSWORD: string;
  DB_USER: string;
  DEFAULT_PROFILE_PICTURE: string;
  FACTURAMA_MAKE_CALLS: boolean;
  FACTURAMA_PASSWORD: string;
  FACTURAMA_PRODUCTION: boolean;
  FACTURAMA_USER: string;
  GITHUB_TOKEN: string;
  IS_PRODUCTION: boolean;
  JWT_WORD: string;
  MAILJET_APPI_KEY: string;
  MAILJET_APPI_SECRET: string;
  MAILJET_EMAIL_FROM: string;
  PDF_API_KEY: string;
  PDF_BANK_ACCOUNT_MOVEMENTS: string;
  PDF_BANK_ACCOUNT_STATUS: string;
  PDF_DOWNLOAD_API_KEY: string;
  PUSH_PRIVATE_KEY: string;
  PUSH_PUBLIC_KEY: string;
  REFRESH_TOKEN_NAME: string;
  REFRESH_TOKEN_WORD: string;
  SERVER: string;
  TZ: string;
  URL_FRONT: string;
  URL_SERVER: string;

  URL_CONTRACT_AZURE: string;
  KEY_CONTRACT_AZURE: string;

  URL_TC_AZURE: string;
  KEY_TC_AZURE: string;

  URL_BIRTHDAY_AZURE: string;
  KEY_BIRTHDAY_AZURE: string;

  EXCEL_PASSWORD: string;

  FACTURAMA_3: string;

  ROBOT_CONTRACT: string;

  SECRET_KEY: string;

  SECRET_IV: string;

  ENCRYPTION_METHOD: string;

  /**
   * Url of the robot for the to do
   */
  TODO_ROBOT_URL: string;

  TODO_KEY_ROBOT: string;

  dominios: string[];

  PDF_ODC: string;

  REACT_APP_BI_COMPRAS: string|null;
  REACT_APP_BI_PROG_PAGOS: string|null;
  REACT_APP_BI_VENTAS: string|null;
}

export interface EnvValuesFile extends EnvValues {
  ROBOT: RobotEnvFile;
}

export interface ReturnUseGenerator {
  form: UseFormReturn<EnvValues, any, undefined> | undefined;
  attemptCreateEnvFile: (formData: EnvValues) => void;
  state: StateGenerator;
  addDomain: (domain: string) => boolean;
  setEnvValues: (envData: EnvValuesFile) => void;
}

export interface StateGenerator {
  customDomains: string[];
}
