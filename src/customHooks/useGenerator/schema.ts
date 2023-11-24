import * as yup from "yup";

const regexPowerBi = /^https:\/\/app\.powerbi\.com/;

const regexHttpsSecure = /^https:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(\/\S*)?$/;
const regexHttpsOrLocalhost =
  /^(http:\/\/localhost|(https?:\/\/(?:www\.)?\w+\.\w+)).*$/;

const schemaValidation = yup.object({
  REACT_APP_BI_COMPRAS: yup
    .string()
    .matches(regexPowerBi, { message: "La liga debe ser de power bi" })
    .default(null)
    .nullable()
    .typeError("El url del reporte debe de ser texto"),
  REACT_APP_BI_PROG_PAGOS: yup
    .string()
    .matches(regexPowerBi, { message: "La liga debe ser de power bi" })
    .default(null)
    .nullable()
    .typeError("El url del reporte debe de ser texto"),
  REACT_APP_BI_VENTAS: yup
    .string()
    .matches(regexPowerBi, { message: "La liga debe ser de power bi" })
    .default(null)
    .nullable()
    .typeError("El url del reporte debe de ser texto"),

  PDF_ODC: yup.string().required("Obligatorio"),

  ACCESS_TOKEN_DURATION: yup.string().required("Obligatorio"),
  ACCESS_TOKEN_NAME: yup
    .string()
    .required("Nombre para el access token obligatorio"),
  AZ_FUNTIONS_URL: yup
    .string()
    .matches(regexHttpsSecure, {
      message: `El texto debe ser un url con https`,
    })
    .required("URL necesario para generar ciertos pdf del sistema"),
  BLOB_STORAGE_KEY: yup.string().required("Obligatorio"),
  DB_NAME: yup.string().required("Obligatorio, para conexion a base de datos"),
  DB_PASSWORD: yup
    .string()
    .required("Obligatorio, para conexion a base de datos"),
  DB_USER: yup.string().required("Obligatorio, para conexion a base de datos"),
  DEFAULT_PROFILE_PICTURE: yup
    .string()
    .default(
      "https://media-exp1.licdn.com/dms/image/C510BAQFp5o89_Xitsw/company-logo_200_200/0/1519872355832?e=2147483647&v=beta&t=g8PFJuWlBHrqWNLz5tLcH_vvULkKHlDZWehztKnsFGs"
    ),
  FACTURAMA_MAKE_CALLS: yup.boolean().required("Obligatorio"),
  FACTURAMA_PASSWORD: yup
    .string()
    .required("Obligatorio, se necesita la contraseña del PAC"),

  FACTURAMA_USER: yup
    .string()
    .required("Obligatorio, se necesita el usuario del PAC"),
  GITHUB_TOKEN: yup.string().default(""),
  IS_PRODUCTION: yup.boolean().transform((libraryValue, domValue) => {
    console.log(libraryValue);
    return domValue === "si" ? true : false;
  }),
  JWT_WORD: yup.string().required("Obligatorio"),
  MAILJET_APPI_KEY: yup.string().required("Obligatorio"),
  MAILJET_APPI_SECRET: yup.string().required("Obligatorio"),
  MAILJET_EMAIL_FROM: yup.string().required("Obligatorio"),
  PDF_API_KEY: yup.string().required("Obligatorio"),

  PDF_BANK_ACCOUNT_MOVEMENTS: yup
    .string()
    .required("Obligatorio, para pdf de bancos/movimientos"),
  PDF_BANK_ACCOUNT_STATUS: yup
    .string()
    .required("Obligatorio, para pdf de bancos"),
  PDF_DOWNLOAD_API_KEY: yup
    .string()
    .required("Obligatorio, para pdf de sistema"),
  PUSH_PRIVATE_KEY: yup
    .string()
    .required("Obligatorio, para notificaciones push"),
  PUSH_PUBLIC_KEY: yup
    .string()
    .required("Obligatorio, para notificaciones push"),
  REFRESH_TOKEN_NAME: yup
    .string()
    .required("Nombre para el refresh token obligatorio"),
  REFRESH_TOKEN_WORD: yup.string().required("Obligatorio"),
  SERVER: yup
    .string()
    .required("Obligatorio, debes proporcionar la conexion a la base de datos"),
  URL_FRONT: yup
    .string()
    .matches(regexHttpsOrLocalhost, {
      message: `El texto debe ser un url con https. Ejemplo: https://saikointranetfront.azurewebsites.net`,
    })
    .required("Obligatorio"),
  URL_SERVER: yup
    .string()
    .matches(regexHttpsOrLocalhost, {
      message: `El texto debe ser un url con https. Ejemplo: https://saikointranetback.azurewebsites.net`,
    })
    .required("Obligatorio"),

  URL_CONTRACT_AZURE: yup
    .string()
    .matches(regexHttpsSecure, {
      message: `El texto debe ser un url con https. Ejemplo: https://praxiatriggers.azurewebsites.net/api/AzF-RenewContract`,
    })
    .required("Obligatorio"),

  KEY_CONTRACT_AZURE: yup
    .string()
    .required("Obligatorio el key para los contratos de azure"),

  URL_TC_AZURE: yup
    .string()
    .matches(regexHttpsSecure, {
      message: `El texto debe ser un url con https. Ejemplo: https://praxiatriggers.azurewebsites.net/api/AzF-RenewContract`,
    })
    .required("Obligatorio"),
  KEY_TC_AZURE: yup
    .string()
    .required("Obligatorio el key para los tipos de camio en azure"),

  URL_BIRTHDAY_AZURE: yup
    .string()
    .matches(regexHttpsSecure, {
      message: `El texto debe ser un url con https. Ejemplo: https://praxiatriggers.azurewebsites.net/api/AzF-RenewContract`,
    })
    .required("Obligatorio"),

  KEY_BIRTHDAY_AZURE: yup
    .string()
    .required(
      "Obligatorio el key para los recordatorios de cumpleaños en azure"
    ),

  SECRET_KEY: yup
    .string()
    .required(
      "Obligatorio, sirve para la encriptacion/des-encriptacion para validar el 2FA"
    ),
  SECRET_IV: yup
    .string()
    .required(
      "Obligatorio, sirve para la encriptacion/des-encriptacion para validar el 2FA"
    ),

  ENCRYPTION_METHOD: yup
    .string()
    .default("aes-256-cbc")
    .required(
      "Obligatorio, sirve para la encriptacion/des-encriptacion para validar el 2FA"
    ),

  TODO_ROBOT_URL: yup
    .string()
    .matches(regexHttpsSecure, {
      message: `El texto debe ser un url con https`,
    })
    .required("Obligatorio para el To Do del robot"),

  TODO_KEY_ROBOT: yup
    .string()
    .required("Clave requerida para poder ejecutar el To Do del robot"),
});

export default schemaValidation;
