
import "../../Styling/Navbar.css"

import React from 'react'


export const Navbar = (props) => {
  return (
     <div>
      {props.children}
     </div>
      
  );
}

export default Navbar;