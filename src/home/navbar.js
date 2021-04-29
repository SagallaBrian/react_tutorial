import {Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="py-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#mytagnavbar" aria-controls="mytagnavbar"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mytagnavbar">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/class">Class Component</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/function">Functional Component</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;