import React from "react";
import { Navbar, NavItem, Button, Icon } from "react-materialize";
import {Link} from "react-router-dom";

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
      <Button><Link to ="/saved">Saved Videos</Link></Button>
      <Button><Link to="/">Search Videos</Link></Button>
    </Navbar>

  </div>)
}

export default Navigation;