import React from "react";
import s from "./Message.module.css"

type MessageProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageProps) {
    return (
        <div className={s.message}>
            <div className={s.usersAvatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={s.messageContent}>
                <div className={s.context}>
                    <div className={s.userName}>{props.name}</div>
                    <div>{props.message}</div>
                </div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
