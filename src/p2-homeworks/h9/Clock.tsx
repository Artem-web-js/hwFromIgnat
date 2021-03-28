import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import style from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    };
    const onMouseLeave = () => {
        // close
        setShow(false)
    };

    const monthName = () => {
        const arr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь',];

        return arr[date.getMonth()]
    }

    const get2digitsString = (num: number) => num < 10 ? '0' + num : num

    const stringTime = `Time: ${get2digitsString(date.getHours())} 
    : ${get2digitsString(date.getMinutes())} 
    : ${get2digitsString(date?.getSeconds())}`;  // fix with date

    const stringDate = `Date: ${monthName()} ${date.getDate()}`; // fix with date

    return (
        <div className={style.wrapper}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={style.clock}
            >
                {stringTime}
            </div>

            {show && (
                <div className={style.clock}>
                    {stringDate}
                </div>
            )}
            <div>
                <SuperButton onClick={start} className={style.button}>start</SuperButton>
                <SuperButton onClick={stop} className={style.button}>stop</SuperButton>
            </div>


        </div>
    );
}

export default Clock;
