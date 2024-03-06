import "./App.css";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider";
import { SnackbarProvider } from "./providers/SnackBarProvider";
import { UserProvider } from "./users/providers/UserProviders";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <SnackbarProvider>
          <UserProvider>
            <Layout>
              <Router />
            </Layout>
          </UserProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
