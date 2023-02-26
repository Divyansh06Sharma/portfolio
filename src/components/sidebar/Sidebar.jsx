import React, { useReducer } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsXLg, BsListNested } from 'react-icons/bs'

import { sideBarMenu, socialIcons } from "../../data/data"
import './sidebar.scss'

const reducer = (state, action) => {
    if (action.type === "OPEN__NAVBAR") {
        return { ...state, openCloseNav: true }
    }
    if (action.type === "CLOSE__NAVBAR") {
        return { ...state, openCloseNav: false }
    }
}

const defaultOption = {
    openCloseNav: false,
}

const Sidebar = () => {
    const [state, dispatch] = useReducer(reducer, defaultOption)
    return (
        <>
            <BsListNested
                className='menu-icon switch__color'
                onClick={() => dispatch({ type: 'OPEN__NAVBAR' })}
            />

            <aside className={`${state.openCloseNav ? 'aside open-sidebar' : 'aside' }`}>
                <div className="aside-wrapper">
                    <BsXLg
                        className='menu-icon switch__color'
                        onClick={() => dispatch({ type: 'CLOSE__NAVBAR' })}
                    />

                    <Link to={"/"} className="logo-section">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 171 210"
                            className="sidebar__logo"
                        >
                            <path
                                className="fill__color"
                                d="M171 209.194C159.166 128.482 123.848 68.1928 79.4896 55.1237C39.9765 68.9721 10.4845 132.104 0 210C24.4381 165.9 53.1053 124.32 80.4167 105.975C115.428 124.605 139.927 163.164 171 209.194L171 209.194Z"
                            />
                            <path
                                d="M12.2177 101.884C32.1592 73.1578 55.5534 46.0733 77.8409 34.1237C106.411 46.259 126.403 71.3757 151.759 101.358C142.102 48.7847 113.282 9.51343 77.0849 1C44.8404 10.0195 20.7735 51.1438 12.2177 101.883V101.884Z"
                                fill="white"
                            />
                        </svg>
                        <span className="switch__color">
                            Divyansh
                        </span>
                    </Link>
                    <ul className="side-link">
                        {sideBarMenu.map((link, index) => {
                            const { text, url, icon } = link
                            return (
                                <li key={index}>
                                    <NavLink to={url} className={({ isActive }) => {
                                        return isActive ? "nav__links active-links" : "nav__links"
                                    }}>
                                        {icon}
                                        {text}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="social-icon" >
                        {socialIcons.map((icons, index) => {
                            const { icon, url } = icons
                            return (
                                <a href={url} key={index}>
                                    {icon}
                                </a>
                            )

                        })}
                    </div>


                </div>
            </aside>
        </>
    )
}

export default Sidebar