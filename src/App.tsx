import { createContext } from "react";
import AccessTokenDuration from "./AccessTokenDuration";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useGenerator, { INITIAL_STATE } from "./customHooks/useGenerator";
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
import LoadFrontendParams from "./LoadFrontendParams";
import Domains from "./Domains";
import OdcKey from "./OdcKey";
import BiVentasCompras from "./BiVentasCompras";
import BiProgPagos from "./BiProgPagos";

export const Context = createContext<ReturnUseGenerator>({
  attemptCreateEnvFile: () => {},
  form: undefined,
  addDomain: () => false,
  state: INITIAL_STATE,
  setEnvValues: () => {},
});

function App() {
  const hook = useGenerator();

  return (
    <>
      <form
        onSubmit={hook.form.handleSubmit(hook.attemptCreateEnvFile, (e) =>
          console.error(e)
        )}
      >
        <Context.Provider value={hook}>
          <Box className="containerForm" minWidth={120}>
            <div className="help">
              <div className="helpLabel">
                <span className="required"></span>
                <p>Obligatorio</p>
              </div>

              <div className="helpLabel">
                <span className="optional"></span>
                <p>Opcional</p>
              </div>

              <div className="helpLabel">
                <span></span>
                <p>
                  Deprecado (Se siguen usando solo para mantener los legacy)
                </p>
              </div>
            </div>

            <FormControl fullWidth>
              <AccessTokenDuration />
            </FormControl>
            <FormControl fullWidth>
              <AccessTokenName />
              <RefreshTokeName />
              <RefreshTokenWord />
              <AzureFunctionUrl />
              <OdcKey />
              <PdfApiKey />
              <BiVentasCompras />
              <BiProgPagos />
              <BlobStorageKey />
              <DatebaseName />
              <DatebaseUsername />
              <DatabasePassword />
              <DatabaseServer />
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
              <MailjetApiKey />
              <TcRenovation />
              <Birthday />
              <JwtWord />
              <UrlFront />
              <Domains />
              <UrlBackend />
              <TwoFactorSecretKey />
              <TwoFactorSecretIv />
              <AlgorithEncrypt2fa />

              <ToDoRobotUrl />
              <ToDoKeyRobot />
            </FormControl>
            <div className="generateEnv">
              <LoadFrontendParams />
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
