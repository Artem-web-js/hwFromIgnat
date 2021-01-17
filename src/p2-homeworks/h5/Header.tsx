import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from "./HW5.module.css"
import {PATH} from "./Routes";

function Header() {
    const [show, setShow] = useState(false)

    return (
        <div onMouseLeave={() => {setShow(false)}}>
            <button className={s.showMenu}
                    onClick={() => {setShow(!show)}}>Menu</button>
            {show && <div className={show ? s.open : s.links} onClick={() => setShow(false)}>
                <NavLink to={PATH.PRE_JUNIOR}
                         className={s.link}
                         activeClassName={s.activeLink}
                >
                    PreJunior
                </NavLink>
                <NavLink to={PATH.JUNIOR}
                         className={s.link}
                         activeClassName={s.activeLink}
                >
                    Junior
                </NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}
                         className={s.link}
                         activeClassName={s.activeLink}
                >
                    Junior+
                </NavLink>
            </div>}
            {/*<NavLink to={'/6'}>Home Work 6</NavLink>*/}
        </div>
    );
}

export default Header;
