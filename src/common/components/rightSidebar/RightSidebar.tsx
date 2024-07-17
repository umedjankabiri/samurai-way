import React, {ChangeEvent, useState} from 'react';
import s from './RightSidebar.module.css'
import {SearchInput} from "common/components/searchInput/SearchInput.tsx";
import {SvgIcons} from "common/components/svgIcons/SvgIcons.tsx";
import {Title} from "common/components/title/Title.tsx";

export const RightSidebar: React.FC = () => {
    const [search, setSearch] = useState('');
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>)=> {
        setSearch(event.currentTarget.value)
    }

    return (
        <section className={s.rightSidebar}>
            <div className={s.rightSidebarWrapper}>
                <div className={s.searchInput}>
                    <SearchInput className={s.search} value={search} placeholder="Search" onChange={onChangeHandler}>
                        <SvgIcons name="search" className={s.svgSearch}/>
                    </SearchInput>
                </div>
                <Title className={s.title}>Messages</Title>
                <div></div>
            </div>
        </section>
    );
};