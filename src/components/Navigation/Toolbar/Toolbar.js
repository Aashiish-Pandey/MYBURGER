import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToogler from '../SideDrawer/DrawerToogler/DrawerToogler'

const toolbar = (props)=> {

    return (

        <header className = {classes.Toolbar}>
        <div><DrawerToogler clicked = {props.drawerToogleClicked}/></div>
       <div className = {classes.Logo}>
       <Logo/>
       </div>
        <nav className ={classes.DesktopOnly}>
          <NavigationItems />
        </nav>

    </header>
    )
}

export default toolbar;