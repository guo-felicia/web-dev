// get the useState hook
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "./style.css";

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
        <div className="list-group-item">
            <div>
                <img className="wd-avatar" src="/img/avatar/userav.jpeg" alt="Avatar"/>
            </div>
            <textarea className="wd-whatsHappening"
                      placeholder="What's happening?"
                      value={whatsHappening}
                      onChange={(event) =>
                          setWhatsHappening(event.target.value)}>
            </textarea>
            <div>
                <i className="far fa-image wd-icon-wh wd-m-60px "></i>
                <i className="fas fa-chart-bar wd-icon-wh"></i>
                <i className="far fa-smile wd-icon-wh"></i>
                <i className="fas fa-calendar-alt wd-icon-wh"></i>
                {/*// notify Tuit button click*/}
                <button className="btn btn-primary btn-block rounded-pill wd-tuit"
                        onClick={tuitClickHandler}>
                    Tuit
                </button>
            </div>
        </div>
    );
}
export default WhatsHappening;