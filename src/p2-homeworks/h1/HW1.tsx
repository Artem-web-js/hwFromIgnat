import React from "react";
import Message from "./Message";

const messageData = {
    avatar: "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg",
    name: "Artem Kozin",
    message: "I've done fist HW",
    time: "22:00",
};

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
