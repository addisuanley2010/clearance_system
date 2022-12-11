import { Stack } from '@mui/material'
import Header from './components/main/Header';
import RightNav from './components/main/RightNav';
import SideNav from './components/main/SideNav';
import Feed from './components/main/Feed';
import { useState, useEffect } from "react";
import { parentContext } from './state/ContextState';
import Alert from './components/comp/Alert';
import axios from 'axios';
function App() {
  const [loginValue, setLoginValue] = useState(false)
  const [sideNavValue, setSideNavValue] = useState(0)
  const [dialogValue, setDialogValue] = useState({
    open: false,
    description: ""
  })
  useEffect(() => {
    axios.get("http://localhost:3002/login", {
      headers: {
        accessToken: sessionStorage.getItem("accessToken"),
      }
    }).then(res => {
      if (res.data.designation === 'admin') {
        setSideNavValue(1);
      }
      else if (res.data.designation === 'staff') {
        setSideNavValue(2);

      }
      else {
        setSideNavValue(0);
      }
    })
  })
  return (
    <Stack>
      <parentContext.Provider value={{
        loginValue: loginValue,
        setLoginValue: setLoginValue,
        sideNavValue: sideNavValue,
        setSideNavValue: setSideNavValue,
        dialogValue: dialogValue,
        setDialogValue: setDialogValue,
      }}>
        <Header />
        <Stack direction="row" spacing={1} alignItems="start">
          <SideNav />
          <Feed setValue={setLoginValue} value={loginValue} />
          <RightNav />
        </Stack>
        <Alert />

      </parentContext.Provider>
    </Stack>
  );
}

export default App;
