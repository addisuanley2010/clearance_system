import { Stack} from'@mui/material'
import Header from './components/main/Header';
import RightNav from './components/main/RightNav';
import SideNav from './components/main/SideNav';
import Feed from './components/main/Feed';
import { useState } from "react";
import { parentContext } from './state/ContextState';
import Alert from './components/comp/Alert';

function App() {
     const [loginValue, setLoginValue] = useState(false)
     const [sideNavValue, setSideNavValue] = useState(0)
     const [dialogValue, setDialogValue] = useState({
      open:false,
      description:""
    })

  return (
    <Stack>
      <parentContext.Provider value={{
        loginValue:loginValue,
        setLoginValue:setLoginValue,
        sideNavValue:sideNavValue,
        setSideNavValue:setSideNavValue,
        dialogValue:dialogValue,
        setDialogValue:setDialogValue
      }}>
      <Header />
      <Stack direction="row" spacing={1} alignItems="start">
          <SideNav/>
          <Feed setValue={setLoginValue}  value={loginValue}/>
          <RightNav />
        </Stack>   
             <Alert/>
 
     </parentContext.Provider>
    </Stack>
  );
}

export default App;
