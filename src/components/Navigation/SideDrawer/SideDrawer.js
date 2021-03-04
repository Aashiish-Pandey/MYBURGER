import React from 'react'
import Logo from '../../logo/Logo'
import NaviagtionItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer'

const sideDrawer = (props)=> {

    return(

        <div className = {classes.SideDrawer}>
            <div className={classes.Logo}>
            <Logo/>
            </div>

            <nav>
                <NaviagtionItems/>
            </nav>
        </div>
    )
}

export default sideDrawer;