import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css'

const controls = [

    {lable: 'Salad', type: 'salad'},
    {lable: 'Bacon', type: 'bacon'},
    {lable: 'Cheese', type: 'cheese'},
    {lable: 'Meat', type: 'meat'},
];

let buildControls = (props)=> (

    <div className = {classes.BuildControls}>
        {controls.map(ctrl=> (

            <BuildControl 
            key = {ctrl.label} 
            lable = {ctrl.lable}
            added = {() =>props.ingredientAdded(ctrl.type)}
            removed = {()=>props.ingredientRemoved(ctrl.type)}
            disabled = {props.disabled[ctrl.type]}
            
            />
        ))}

    </div>
)


export default buildControls;