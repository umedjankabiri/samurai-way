import React from 'react';
import s from "./LeftSidebar.module.css"
import {NavLink} from "react-router-dom";

export const LeftSidebar: React.FC = () => {
    return (
        <section className={s.leftSidebar}>
            <div className={s.logoWrapper}>
                <div className={s.logo}>
                    <img src="/src/assets/310807-P8CPVZ-507.jpg" alt="Logo"/>
                </div>
            </div>
            <div className={s.avatarWrapper}>
                <div className={s.avatar}>
                    <img src="/src/assets/Umedjan Kabir.jpg" alt="Umedjan Kabiri"/>
                </div>
                <div className={s.nameWrapper}>
                    <div className={s.userName}>
                        Umedjan KABIRI
                    </div>
                    <div className={s.nickName}>
                        wanderer
                    </div>
                </div>
            </div>
            <div className={s.followWrapper}>
                <div className={s.followers}>
                    700 followers
                </div>
                <div className={s.following}>
                    300 following
                </div>
            </div>
            <div className={s.buttonsWrapper}>
                <NavLink to="#" className={s.toMain}>Main</NavLink>
                <NavLink to="#" className={s.toMessages}>Messages</NavLink>
                <NavLink to="#" className={s.toFind}>Find</NavLink>
                <NavLink to="#" className={s.toNotifications}>Notifications</NavLink>
                <NavLink to="#" className={s.toAbout}>About Us</NavLink>
            </div>
        </section>
    );
};