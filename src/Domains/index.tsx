import { useContext, useRef, useState } from "react";
import { TextField, Button } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { Context } from "../App";
import ui from "./styles.module.css";

export default function Domains() {
  const hook = useContext(Context);

  const [url, setUrl] = useState("");

  const key = useRef(`${window.crypto.randomUUID()}`);

  const attemptAddDomain = () => {
    const wasAdded = hook.addDomain(url);

    if (!wasAdded) {
      alert("Asegurate de que el texto sea un URL https");
      return;
    }

    setUrl("");
  };

  return (
    <div className={ui.domains}>
      <div className={ui.urlInput}>
        <TextField
          fullWidth
          value={url}
          label="Dominios personalizados (Opcional)"
          variant="outlined"
          placeholder="Ejemplo: https://praxia.saiko.mx"
          onChange={(e) => setUrl(e.target.value)}
        />

        <Button type="button" variant="outlined" onClick={attemptAddDomain}>
          ➕
        </Button>
      </div>

      <FormHelperText>
        Dominios personalizados a utilizar con el cliente para que pueda acceder
        a la UI de Praxia. Estos dominios son los que se configuran para
        <b>Front-End</b>.<b>NO INCLUIR</b> el url del hosting que proporciona el
        subdominio (en este caso Microsoft). Al final del url <b>NO DEBE DE HABER</b> una diagonal
      </FormHelperText>

      {hook.state.customDomains.length <= 0 ? (
        <p>✅ No hay dominios personalizados, por lo pronto</p>
      ) : (
        hook.state.customDomains.map((domain, i) => (
          <ol key={`${key.current}-${i}`}>
            <li>{domain}</li>
          </ol>
        ))
      )}
    </div>
  );
}
