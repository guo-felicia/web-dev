import {useParams} from "react-router-dom";

const TuitDetails = ({tuits}) => {
    const {tid} = useParams();
    //alternative:
    // const params = useParams();
    // const tuitId = params.tid;
    const tuit = tuits.find(t => t._id === tid)
    return (
        <div>
            <h1>Tuit Details {tid}</h1>
        </div>
    )
}

export default TuitDetails;