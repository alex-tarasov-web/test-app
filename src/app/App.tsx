import React, {Suspense} from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import './styles/index.css'
import {PageLoader} from "../widgets/PageLoader";
import AppRouter from "./providers/router/ui/AppRouter";
import AuthContextProvider from "./providers/AuthContext/ui/AuthContextProvider";
import {BrowserRouter} from "react-router-dom";
import {ErrorBoundary} from "./providers/ErrorBoudary";

const theme = createTheme({
  palette: {
// @ts-ignore
    customColors: {
      sidebar: '#A5A6F6',
    }
  }
})


function App() {
  return (
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense
            fallback={<PageLoader/>}
          >
            <AuthContextProvider>
              <ThemeProvider theme={theme}>
                <AppRouter/>
              </ThemeProvider>
            </AuthContextProvider>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
  );
}

export default App;
