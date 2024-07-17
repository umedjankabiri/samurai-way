import React from 'react';
import s from './Feeds.module.css'
import {Stories} from "common/components/feeds/Stories/Stories.tsx";
import s1 from "common/components/title/Title.module.css";
import {Title} from "common/components/title/Title.tsx";
import {PostHeader} from "common/components/feeds/Post/postHeader/PostHeader.tsx";
import {PostBody} from "common/components/feeds/Post/postBody/PostBody.tsx";
import {PostFooter} from "common/components/feeds/Post/postFooter/PostFooter.tsx";

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
            <div className={s.titleWrapper}>
                <Title className={s1.storiesTitle}>Feeds</Title>
            </div>
            <div className={s.componentWrapper}>
                <PostHeader/>
                <PostBody/>
                <PostFooter/>
            </div>
        </section>
    );
};