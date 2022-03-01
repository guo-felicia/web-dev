import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TuitApp from "./components/wk6_lec/TuitApp";
import Login from "./components/wk6_lec/Login";
import Register from "./components/wk6_lec/Register";

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


// ReactDOM.render(
//     <React.StrictMode>
//         <TuitApp/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
