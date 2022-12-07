import { Stack} from'@mui/material'
import Header from './components/Header';
import RightNav from './components/RightNav';
import SideNav from './components/SideNav';
import Feed from './components/Feed';

function App() {
  return (
    <Stack>
      <Header/>
      <Stack direction="row" spacing={1} alignItems="start">
          <SideNav/>
          <Feed />
          <RightNav />
        </Stack>    
     
    </Stack>
  );
}

export default App;
