import React, { Component } from 'react';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<EinsteinQuoteComponent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
