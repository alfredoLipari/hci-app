import React from "react";
import Popup from "reactjs-popup";
import './addPage.css'

export const AddPagePopup = (props) => {
    return (
        <Popup open={props.open} className={'addPage-popup'}>
        </Popup>
    )
}