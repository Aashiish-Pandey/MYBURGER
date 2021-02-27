import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";

const controls = [
  { lable: "Salad", type: "salad" },
  { lable: "Bacon", type: "bacon" },
  { lable: "Cheese", type: "cheese" },
  { lable: "Meat", type: "meat" },
];

let buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current price :<strong> {props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        lable={ctrl.lable}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}

    <button className={classes.OrderButton} disabled ={!props.purchaseble}>ORDER NOW</button>
  </div>
);

export default buildControls;
