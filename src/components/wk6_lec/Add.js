import {useParams} from "react-router-dom";

const Add = () => {
    const params = useParams();
    /*Abstract value of a and b*/
    let {a,b} = params;
    a = parseInt(a);
    b = parseInt(b);
    return(
        <div>
            <h1>ADD</h1>
            {a} + {b} = {a + b}
            {JSON.stringify(params)}
        </div>
    )
}

export default Add;