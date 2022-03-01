import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Add from "./Add";
import TuitDetails from "./TuitDetails";
import Nav from "./Nav";

const TUITS = [
    {title: "TUIT ABC", _id: 123}
]


const TuitApp = () => {
    return (
        <BrowserRouter>
            <Nav/>
            <div className="col">
                <Routes>
                    <Route path="/add/:a/:b" element={<Add/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/tuits/:tid" element={
                        <TuitDetails/>}/>
                    {/*<TuitList setNewtuitTitle = {setNewtuitTitle} ... />*/}
                </Routes>
            </div>
        </BrowserRouter>
    )
    
    
}

export default TuitApp;
