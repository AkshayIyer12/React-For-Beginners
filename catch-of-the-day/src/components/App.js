import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes.js';

class App extends React.Component {

	constructor() {
		super();
		// getinitalState
		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.addToOrder = this.addToOrder.bind(this);
		this.state = {
			fishes: {},
			order: {}
		};
	}

	addFish(fish) {
		//update our state
		const fishes = {...this.state.fishes};
		//add in our new fish
		const timeStamp = Date.now();
		fishes[`fish-${timeStamp}`] = fish;
		// this.state.fishes.fish1 = fish;
		//set state
		this.setState({ fishes: fishes })
	}
	loadSamples() {
		this.setState({
			fishes: sampleFishes
		});
	}
	addToOrder(key) {
		//take a copy of our state
		const order = {...this.state.order};
		//update or add the new number of fish ordered 
		order[key] = order[key] + 1 || 1;
		//update our state
		this.setState({ order });
	}
	render() {
		return (
		<div className="catch-of-the-day">
			<div className="menu">
				<Header tagline="Fresh Seafood Market" />
				<ul className="list-of-fishes">
				{
					Object
					.keys(this.state.fishes)
					.map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
				}
				
				</ul>
			</div>
			<Order />
			<Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
		</div>
		)
	}
}

export default App;