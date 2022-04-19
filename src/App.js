import { BrowserRouter } from "react-router-dom";
import GlobalStyle from './styles/global';
import Rotas from "./routes";
import AuthProvider from "./contexts/auth";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <Rotas/>
      </BrowserRouter>
    </AuthProvider>
  );
}

