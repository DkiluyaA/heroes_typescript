import React from 'react';

import Modal from '@material-ui/core/Modal';

import {makeStyles} from '@material-ui/core/styles';
import {ViewHero} from "./ViewHero";

export const SimpleModal = ({dataHero}) => {

    const rand = () => Math.round(Math.random() * 20) - 10;

    const getModalStyle = () => {
        const top = 50 + rand();
        const left = 50 + rand();

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: 600,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const body = <div style = {modalStyle} className = {classes.paper}>
       <button className = 'modal-close-button'  onClick = {dataHero.onClick}/>
        <ViewHero dataHero = {dataHero}/>
        <SimpleModal/>
    </div>;

    // console.log(dataHero.isOpen)
    return (
        <Modal
            open = {dataHero.isOpen}
            onClose = {dataHero.onClick}
            onKeyDown={dataHero.onKeyDown}
            aria-labelledby = "simple-modal-title"
            aria-describedby = "simple-modal-description"
        >
            {body}
        </Modal>
    )
}

