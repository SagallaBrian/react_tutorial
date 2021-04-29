import './App.css';
import Compone from './components/comp1';
import Comptwo from './components/comp2';
import Listimp from './list/lists';
import Pasaram from './passingparams/passparam';
import Paspram2 from './passingparam2/params2';
import Hooks from './hooks/hooks';
import LifeCycle from './lifecyle/cycle';
import Eventlis from './eventlistner/eventlist'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>

			<div className="App">

				<Switch>
					<Route path="/tut1" exact>
						<Compone myuser="Eunice" />
						<Comptwo myuser="Brian" />

					</Route>
					<Route path="/tut2" exact>
						<Listimp />
					</Route>
					<Route path="/tut3" exact>
						<Pasaram />
					</Route>
					<Route path="/tut4" exact>
						<Paspram2 />
					</Route>
					<Route path="/tut5" exact>
						<LifeCycle />
					</Route>
					<Route path="/tut6" exact>
						<Hooks />
					</Route>
					<Route path="/tut7" exact>
						<Eventlis />
					</Route>
				</Switch>
			</div>

		</Router>

	);
}

export default App;
