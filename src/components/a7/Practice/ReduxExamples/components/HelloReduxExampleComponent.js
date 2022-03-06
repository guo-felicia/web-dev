import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
    /*Updated version*/
    const message = useSelector((state) => state.hello.message);
    /*const message = useSelector((hello) => hello.message);*/
    return(
        <h1>{message}</h1>
    );
};

export default HelloReduxExampleComponent;
