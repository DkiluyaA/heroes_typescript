import React, {useEffect} from 'react';

import {ViewHero} from "./ViewHero";

import '../styles/modal.css';

 const Modal = ({ dataHero }) => {
     return (
        <div id="myModal" className = "modal" >
            <div className = "modal-content"
                 id = "modalContent"
                 tabIndex={0}>
                <div className = "modal-header">
                    <span className = "close"
                          onClick={dataHero.onClose}
                    >&times;</span>
                </div>
                <ViewHero dataHero = {dataHero}/>
            </div>

        </div>
    )
}

export default Modal;
