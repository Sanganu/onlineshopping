import React from "react";
import { Navbar, NavItem, Button, Icon } from "react-materialize";


function Navigation() {
  return (<div>
    <Navbar
      alignLinks="left"
      brand={<a className="brand-logo right" href="#">Coders Spot</a>}
      id="mobile-nav"
      menuIcon={<Icon></Icon>}
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
      <Button>Saved Videos</Button>
      <Button>Search Videos</Button>
    </Navbar>

  </div>)
}

export default Navigation;