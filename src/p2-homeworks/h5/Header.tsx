import React from "react";
import { NavLink } from "react-router-dom";
import s from "./HW5.module.css"

function Header() {
    return (
        <div className={s.links}>
            <NavLink to={"/pre-junior"} activeClassName={s.activeLink}>PreJunior</NavLink>
            <NavLink to={'/1'} activeClassName={s.activeLink}>Home Work 1</NavLink>
            <NavLink to={'/2'} activeClassName={s.activeLink}>Home Work 2</NavLink>
            <NavLink to={'/3'} activeClassName={s.activeLink}>Home Work 3</NavLink>
            <NavLink to={'/4'} activeClassName={s.activeLink}>Home Work 4</NavLink>
            {/*<NavLink to={'/6'}>Home Work 6</NavLink>*/}
        </div>
    );
}

export default Header;
