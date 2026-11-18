import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { css, Global } from "@emotion/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          color: #111318;
        }

        button,
        input {
          font: inherit;
        }
        button {
          cursor: pointer;
        }
        a {
          color: #1672f7;
        }
      `}
    />
    <App />
  </StrictMode>,
);
