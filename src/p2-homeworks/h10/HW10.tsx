import React from "react";
import {useDispatch, useSelector} from "react-redux";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import CircularProgress from "@material-ui/core/CircularProgress";

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            <h3 style={{textAlign: "center"}}>homeworks 10</h3>

            {/*should work (должно работать)*/}
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                {loading
                    ? (
                        <CircularProgress color="secondary" style={{display: "block"}}/>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
