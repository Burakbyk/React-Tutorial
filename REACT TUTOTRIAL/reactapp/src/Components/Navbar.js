import React from "react";
import PropTypes from "prop-types";

function Navbar(props) {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};
Navbar.defaultProps = {
    title: "Default App"
  };
export default Navbar;





// const Navbar = () =>
// {
//     return(
//         <div>
//             <h3>User App</h3>
//         </div>
//     )

// }
// export default Navbar;