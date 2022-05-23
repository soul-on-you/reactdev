import React from 'react'
import classes from "./CustomNavbar.module.css"

function CustomNavbar({children}) {
    return (
        <div className={classes.customNavbar}>
            {children}
        </div>
    )
}

export default CustomNavbar
