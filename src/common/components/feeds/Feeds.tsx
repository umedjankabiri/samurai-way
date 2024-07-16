import React from 'react';
import s from './Feeds.module.css'
import {Stories} from "common/components/feeds/Stories/Stories.tsx";
import s1 from "common/components/title/Title.module.css";
import {Title} from "common/components/title/Title.tsx";

export const Feeds: React.FC = () => {
    return (
        <section className={s.feeds}>
            <Title className={s1.storiesTitle}>Stories</Title>
            <div className={s.feedsWrapper}>
                <Stories/>
                <Stories/>
                <Stories/>
                <Stories/>
                <Stories/>
            </div>
        </section>
    );
};
