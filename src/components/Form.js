import React from "react";
import classes from "../styles/Form.module.css";

// function Form({ children, ...rest }) {
//   return (
//     <form className={classes.form} action="#" {...rest}>
//       {children}
//     </form>
//   );
// }

function Form({ children, className, ...rest }) {
  return (
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
      {children}
    </form>
  );
}

export default Form;
