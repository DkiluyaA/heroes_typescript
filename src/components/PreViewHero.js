import React from "react";
import Modal from "./Modal";

import '../styles/preViewHero.css';

 const PreViewHero = ({ dataHero }) => {
    return <div className = 'pre-view-hero'>
        <div className = 'pre-hero-header' onClick = {dataHero.onPreviewClick} >
            <img src = {dataHero.url}
                 alt = "View hero"
                 className='hero-img'
            />
            <h4 className = 'hero-name'>{dataHero.name}</h4>
        </div>
        <Modal dataHero={dataHero}/>
    </div>
}

export default PreViewHero;
