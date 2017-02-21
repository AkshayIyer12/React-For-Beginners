import React from 'react'
import { getFunName } from '../helpers';
class StorePicker extends React.Component{

	// constructor(){
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }


	goToStore(event){
		event.preventDefault();
		console.log('You Changed the URL');
		//first grab the text from the box
		console.log(this.storeInput.value);
		//second we're going to transition from / to /store/:storeId 


	}

	render() {
		return (
			<form className="store-selector" onSubmit={ 
				// Could have used this (e) => this.goToStore(e) but
				// everytime the user will click the button 
				//the function will have to run everytime  
				this.goToStore.bind(this)} >
				{/*Look Here --> */}
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={ getFunName()} 
				ref={(input) => { this.storeInput = input}} />
				<button type="submit">Visit Store -></button>
				 
			</form>
			)
	}
}

export default StorePicker;