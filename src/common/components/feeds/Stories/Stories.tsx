import React from 'react';
import s from "./Stories.module.css" // CSS styles for component of Stories

export const Stories: React.FC = () => {
    return (
        <section className={s.stories}>
            <div className={s.storiesWrapper}>
                <div className={s.usersStories}>
                    <div className={s.story}></div>
                    <span className={s.userName}>User Name</span>
                </div>
            </div>
        </section>
    );
};