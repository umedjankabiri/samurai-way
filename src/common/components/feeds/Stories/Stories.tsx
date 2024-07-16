import React from 'react';
import s from "./Stories.module.css" // CSS styles for component of Stories

export const Stories: React.FC = () => {
    return (
        <section className={s.stories}>
            <div className={s.storiesWrapper}>
                <div className={s.addStory}>
                    <span>Add story</span>
                </div>

                <div className={s.usersStory}>

                </div>
            </div>
        </section>
    );
};