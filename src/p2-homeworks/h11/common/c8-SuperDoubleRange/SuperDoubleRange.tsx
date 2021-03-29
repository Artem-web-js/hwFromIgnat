import React from "react";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    handlerValue: (value: Array<number>) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value,
        // min, max, step, disable, ...
        handlerValue
    }
) => {
    // сделать самому, можно подключать библиотеки
    const handleChange = (event: any, newValue: any) => {
        handlerValue(newValue)
    };

    return (
        <>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                style={{width: "200px"}}
            />
        </>
    );
}

export default SuperDoubleRange;
