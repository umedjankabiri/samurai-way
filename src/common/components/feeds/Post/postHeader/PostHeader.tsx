import React from 'react';
import s from "common/components/feeds/Post/postHeader/PostHeader.module.css" // CSS styles for Post.tsx
import s1 from "common/components/Button/Button.module.css" // CSS styles for button.tsx
import {Button} from "common/components/Button/Button.tsx";
import {SvgIcons} from "common/components/svgIcons/SvgIcons.tsx";

export const PostHeader: React.FC = () => {
    return (
        <div className={s.userPost}>
            <div className={s.PostHeader}>
                <div className={s.userAvatar}>
                    <div className={s.avatar}>

                    </div>
                    <div className={s.userName}>
                        <span className={s.name}>John ANDERSON</span>
                        <span className={s.nickName}>mr. Smith</span>
                    </div>
                </div>
                <div className={s1.postButtons}>
                    <Button className={s1.bellButton}>
                        <SvgIcons name={"bell"} className={s1.bellSvg}/>
                    </Button>
                    <Button className={s1.followButton}>
                        Following
                    </Button>
                </div>
            </div>
        </div>
    );
};