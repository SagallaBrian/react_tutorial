import { Link } from 'react-router-dom';

function Contentcomp() {
    return (
        <div className="py-3">
            <h4 className="font-weight-normal text-primary">React Introduction Tutorial</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">React Topics</th>
                        <th scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dynamic Classes</td>
                        <td>
                            <Link className="nav-link" to="/tut1">Click here</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>List Rendering</td>
                        <td>
                            <Link className="nav-link" to="/tut2">Click here</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Passing Parameter onClick event</td>
                        <td>
                            <Link className="nav-link" to="/tut3">Click here</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Passing Parameter 2</td>
                        <td>
                            <Link className="nav-link" to="/tut4">Click here</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Lifecycle on Components</td>
                        <td>
                            <Link className="nav-link" to="/tut5">Click here</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Introduction To hooks</td>
                        <td>
                            <Link className="nav-link" to="/tut6">Click here</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


export default Contentcomp;