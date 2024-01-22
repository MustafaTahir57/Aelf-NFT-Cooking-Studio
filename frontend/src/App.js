
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './component/navbar';
import Home from './component/home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import DetailPage from './component/detail-page';
import Footer from './component/footer';
import { useState } from 'react';
import Post from './component/post';
function App() {
  const [connectWallet,setConnectWallet] = useState("")
  const [provider, setProvider] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
      <Navbars setConnectWallet={setConnectWallet} setProvider={setProvider} provider={provider}/>
      <Routes>
           <Route path='/' element={<Home connectWallet={connectWallet}  provider={provider}/>}/>
           <Route path="/details" element={<DetailPage/>}/>
           <Route path="/post" element={<Post connectWallet={connectWallet}/>}/>
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
