import React from "react";
import Logo from "../../logo/Logo";
import NaviagtionItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxilary";

const sideDrawer = (props) => {

  let  attachedClasses = [classes.SideDrawer, classes.Close]

  if(props.open) {

    attachedClasses = [classes.SideDrawer, classes.Open]


  }
  return (
    <Aux>
      <Backdrop show ={props.open} clicked = {props.closed}/>

      <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NaviagtionItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
