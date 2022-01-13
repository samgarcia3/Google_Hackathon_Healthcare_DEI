import React from 'react';
import { NavLink } from "react-router-dom";
import "./BottomMenu.scss";
import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";
import { ReactComponent as CoverageIcon } from "../../assets/svg/coverage.svg";
import { ReactComponent as LearnIcon } from "../../assets/svg/learn.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svg/profile.svg";

export default function BottomMenu() {
    return (
        <div className="bottom-menu">
            <ul className="bottom-menu__list">
                <li>
                    <NavLink className="bottom-menu__item" activeClassName="bottom-menu__item--active" to="/matches/home">
                        <HomeIcon className="bottom-menu__icon" />
                        <p>Home</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="bottom-menu__item" activeClassName="bottom-menu__item--active" to="/matches/coverage">
                        <CoverageIcon className="bottom-menu__icon" />
                        <p>Coverage</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="bottom-menu__item" activeClassName="bottom-menu__item--active" to="/matches/learn">
                        <LearnIcon className="bottom-menu__icon" />
                        <p>Learn</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="bottom-menu__item" activeClassName="bottom-menu__item--active" to="/matches/profile">
                        <ProfileIcon className="bottom-menu__icon" />
                        <p>Profile</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}