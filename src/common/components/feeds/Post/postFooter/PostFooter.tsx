import React, {useState} from 'react';
import s from "common/components/feeds/Post/postFooter/postFooter.module.css"
import {Button} from "common/components/Button/Button.tsx";
import {SvgIcons} from "common/components/svgIcons/SvgIcons.tsx";

export const PostFooter: React.FC = () => {
    const [likes, setLikes] = useState(2080);
    const [hasLikes, setHasLiked] = useState(false);

    const onClickHandler = ()=> {
        !hasLikes ? setLikes(prevLikes => prevLikes + 1) : null
        setHasLiked(true)
    }

    return (
        <div className={s.postFooter}>
            <div className={s.postFooterWrapper}>
                <div className={s.icons}>
                    <div className={s.likeWrapper}>
                        <div className={s.like}>
                            <SvgIcons name={"like"} onClick={onClickHandler}/>
                        </div>
                        <span className={s.numberOf}>
                            {likes}
                        </span>
                    </div>
                    <div className={s.commentsWrapper}>
                        <div className={s.comments}>
                            <SvgIcons name={"comments"}/>
                        </div>
                        <span className={s.numberOf}>
                            643
                        </span>
                    </div>
                    <div className={s.shareWrapper}>
                        <div className={s.share}>
                            <SvgIcons name="share"/>
                        </div>
                        <span className={s.numberOf}>
                            98
                        </span>
                    </div>
                </div>
                <div className={s.collect}>
                    <Button className={s.collectButton}>
                        <SvgIcons name="collect"/>
                         Collect
                    </Button>
                </div>

            </div>
        </div>
    );
};