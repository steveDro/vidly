import React, { Component } from "react";

// Stateless function components
// use it for simple components
const NavBar = ({ totalCounter }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounter}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

// class NavBar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar
//           <span className="badge badge-pill badge-secondary m-2">
//             {this.props.totalCounter}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default NavBar;
