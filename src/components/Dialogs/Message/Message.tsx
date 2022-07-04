import React from "react";
import { MessagesDataType } from "../../../Redux/myStore";
import s from './Message.module.css'

export const Message = (props: MessagesDataType) => {
    return <div className={s.message}>
        {props.message}
    </div>
}