import {Link, useLocation} from "react-router-dom";

const Nav = () => {
    const location = useLocation();
    return (
        <div className="row">
            <div className="list-group">
                <Link to="/login"
                      classNmas={`${location.pathname === '/login' ? 'active' : ''}
                      list-group-iterm`}>Login</Link>
                <Link to="/register"
                      classNmas={`${location.pathname === '/register' ? 'active' : ''}
                          list-group-iterm`}> Register </Link>
                <Link to="/tuits"
                      classNmas={`${location.pathname === '/tuits' ? 'active' : ''}
                          list-group-iterm`}>Tuits</Link>
            </div>
            {JSON.stringify(location)};
        </div>
    )
}
export default Nav;