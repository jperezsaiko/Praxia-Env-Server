import { createContext } from "react";
import AccessTokenDuration from "./AccessTokenDuration";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useGenerator from "./customHooks/useGenerator";
import AccessTokenName from "./AccessTokenName";
import AzureFunctionUrl from "./AzureFunctionUrl";
import WarningIcon from "@mui/icons-material/Warning";
import BlobStorageKey from "./BlobStorageKey";
import DatebaseName from "./DatabaseName";
import DatebaseUsername from "./DatabaseUsername";
import DatabasePassword from "./DatabasePassword";
import FacturamaMakeCalls from "./FacturamaMakeCalls";
import FacturamaPassword from "./FacturamaPassword";
import FacturamaUser from "./FacturamaUser";
import IsProduction from "./IsProduction";
import GithubToken from "./GITHUB_TOKEN";
import RefreshTokeName from "./RefreshTokenName";
import ContractRenovation from "./ContractRenovation";
import TcRenovation from "./TcRenovation";
import Birthday from "./Birthday";
import PdfMovements from "./PdfMovements";
import AccountStatus from "./AccountStatus";
import KeyDocuments from "./PdfDocument";
import PushPrivateKey from "./PushPrivateKey";
import PushPublicKey from "./PushPublicKey";
import MailjetEmail from "./MailjetEmail";
import MailjetApiSecret from "./MailjetApiSecret";
import JwtWord from "./JwtWord";
import { ReturnUseGenerator } from "./customHooks/useGenerator/types";
import UrlBackend from "./UrlBackend";
import UrlFront from "./UrlFront";
import PdfApiKey from "./PdfApiKey";
import DatabaseServer from "./DatabaseServer";
import RefreshTokenWord from "./RefreshTokenWord";
import MailjetApiKey from "./MailjetApiKey";
import TwoFactorSecretKey from "./2faSecretKey";
import TwoFactorSecretIv from "./2faSecrettIv";
import AlgorithEncrypt2fa from "./AlgorithEncrypt2fa";
import ToDoKeyRobot from "./TodoKeyRobot";
import ToDoRobotUrl from "./ToDoRobotUrl";

export const Context = createContext<ReturnUseGenerator>({
  attemptCreateEnvFile: () => {},
  form: undefined,
});

function App() {
  const hook = useGenerator();

  return (
    <>
      <div className="information">
        <WarningIcon />
        <b>Deprecado: </b>
        <p>
          Estos campos no son utilizados pero se agregan al pipeline para evitar
          errores, estos campos se iluminan de color naranja
        </p>
      </div>

      <form
        onSubmit={hook.form.handleSubmit(hook.attemptCreateEnvFile, (e) =>
          console.error(e)
        )}
      >
        <Context.Provider value={hook}>
          <Box className="containerForm" minWidth={120}>
            <FormControl fullWidth>
              <AccessTokenDuration />
            </FormControl>
            <FormControl fullWidth>
              <AccessTokenName />
              <RefreshTokeName />
              <RefreshTokenWord/>
              <AzureFunctionUrl />
              <PdfApiKey/>
              <BlobStorageKey />
              <DatebaseName />
              <DatebaseUsername />
              <DatabasePassword />
              <DatabaseServer/>
              {/* <ExcelPassword /> */}
              {/* <FacturamaUrl /> */}
            </FormControl>

            <FormControl fullWidth>
              <FacturamaMakeCalls />
            </FormControl>

            <FormControl fullWidth>
              <FacturamaPassword />
              <FacturamaUser />
            </FormControl>
            <FormControl fullWidth>
              <IsProduction />
              <GithubToken />
              <ContractRenovation />
              <PdfMovements />
              <AccountStatus />
              <KeyDocuments />
              <PushPrivateKey />
              <PushPublicKey />
              <MailjetEmail />
              <MailjetApiSecret />
              <MailjetApiKey/>
              <TcRenovation />
              <Birthday />
              <JwtWord />
              <UrlFront/>
              <UrlBackend/>
              <TwoFactorSecretKey/>
              <TwoFactorSecretIv/>
              <AlgorithEncrypt2fa/>

              <ToDoRobotUrl/>
              <ToDoKeyRobot/>
            </FormControl>
            <div className="generateEnv">
              <Button type="submit" variant="outlined">
                Generar parametros
              </Button>
            </div>
          </Box>
        </Context.Provider>
      </form>
    </>
  );
}

export default App;
