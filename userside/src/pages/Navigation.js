import React from "react";
import { Navbar, NavItem, Button, Icon } from "react-materialize";


function Navigation(){
    return(<div>
        <Navbar
  alignLinks="left"
  brand={<a className="brand-logo right" href="#">YouTube API</a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  <NavItem onClick={function noRefCheck(){}}>
    Search Video
  </NavItem>
  <NavItem href="components.html">
    Saved Videos
  </NavItem>
</Navbar>
     
      </div>)
}

export default Navigation;