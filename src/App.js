import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar.jsx"
import Sidebar from "./scenes/global/Sidebar.jsx";
import Dashboard from "./scenes/dashboard";
import { Routes,Route } from "react-router-dom";
import Team from "./scenes/team/Team.jsx";
import Contacts from "./scenes/contacts/Contacts.jsx";
import Form from "./scenes/form/Form.jsx";
import Calendar from "./scenes/calendar/Calendar.jsx";
import FAQ from "./scenes/fac/FAQ.jsx";

function App() {

  const [theme,colorMode]=useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/team" element={<Team />}/>
              <Route path="/contacts" element={<Contacts />}/>
              <Route path="/form" element={<Form />}/>
              <Route path="/calendar" element={<Calendar />}/>
              <Route path="/faq" element={<FAQ />}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
