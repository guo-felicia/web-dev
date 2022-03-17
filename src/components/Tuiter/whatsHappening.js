// get the useState hook
import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    // create whatsHappening state variable
    let [whatsHappening, setWhatsHappening]
        = useState('');
    // handle tuit button click
    const tuitClickHandler = () => {
        dispatch({
            type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    const dispatch = useDispatch();
    return (
        <>
            {/*// show current whatsHappening in textarea*/}
            {/*// if it changes, update whatsHappening*/}
            {/*// with textarea's value*/}
            
            <textarea value={whatsHappening}
                      onChange={(event) =>
                          setWhatsHappening(event.target.value)}>
            </textarea>
            {/*// notify Tuit button click*/}
            <button onClick={tuitClickHandler}>
                Tuit
            </button>
        </>
    );
}
export default WhatsHappening;