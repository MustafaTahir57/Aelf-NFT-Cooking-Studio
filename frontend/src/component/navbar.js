import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
import { Link } from 'react-router-dom';
import { MethodsBase } from "@portkey/provider-types";
import detectProvider from "@portkey/detect-provider";
function Navbars({setConnectWallet, setProvider, provider}) {
  
  const [isConnected, setIsConnected] = useState(false);
  const [isConnect, setIsConnect] = useState()
  const init = async () => {
    try {
      setProvider(await detectProvider());
    } catch (error) {
      console.log(error, "=====error");
    }
  };
  const connect = async () => {
    try {
      let result = await provider?.request({
        method: MethodsBase.REQUEST_ACCOUNTS,
      });
      console.log("result", result.AELF[0]);
      if(result){
        let acc = result.AELF[0]
        setConnectWallet(acc)
        setIsConnect(acc.substring(0, 7) + "..." + acc.substring(acc.length - 7))
        setIsConnected(true);
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      setIsConnected(false);
    }
  };

  useEffect(() => {
    if (!provider) init();
  }, [provider]);

  // if (!provider) return <>Wallet not Found.</>;
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary p-4">
      <Container>
        <Link to="/" style={{textDecoration: "none"}}><Navbar.Brand className='logo-text'>AELF-NFT-STUDIO</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
           <Link to="/post" style={{textDecoration: "none"}}><Nav.Link href="/post" className='nav-text me-4'>Posts</Nav.Link></Link>
           <button className='btn btn-connect' onClick={connect}>{
            isConnected ? isConnect: "Connect Wallet"
           }</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars