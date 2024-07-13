import React from 'react';
import s from './Main.module.css'
import {LeftSidebar} from "common/components/leftSidebar/LeftSidebar.tsx";
import {Feeds} from "common/components/feeds/Feeds.tsx";
import {RightSidebar} from "common/components/rightSidebar/RightSidebar.tsx";

export const Main: React.FC = () => {
    return (
        <div className={s.mainWrapper}>
            <LeftSidebar/>
            <Feeds/>
            <RightSidebar/>
        </div>
    );
};