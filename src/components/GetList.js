import React from "react";
import PreViewHero from "./PreViewHero";

import '../styles/getList.css';

const GetList = ({ title, list }) => {
    if(list.length === 1) return null;

    return <div className = "table-column">
        <h1>{ title }</h1>
        <div className = "list-heroes">
            { list?.map(hero => <PreViewHero dataHero = {hero}/>)}
        </div>
    </div>
}

export default GetList;
