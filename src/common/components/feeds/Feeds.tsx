import React from 'react';
import s from './Feeds.module.css'
import {Stories} from "common/components/feeds/Stories/Stories.tsx";

export const Feeds: React.FC = () => {
    return (
        <section className={s.feeds}>
            <Stories/>
        </section>
    );
};