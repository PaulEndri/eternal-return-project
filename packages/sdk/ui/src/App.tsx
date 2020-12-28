import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import LayoutComponent from './components/layout';
import { BrowserRouter as Router } from 'react-router-dom';
import PlannerView from './views/planner';
import { ItemModalProvider } from './state/itemModal';
import { ItemModalComponent } from './components/itemModal.component';

function App() {
	return (
		<div className="App">
			<ItemModalProvider>
				<Router>
					<LayoutComponent>
						<PlannerView />
					</LayoutComponent>
				</Router>
				<ItemModalComponent />
			</ItemModalProvider>
		</div>
	);
}

export default App;
