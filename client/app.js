const multi = require('./multi.js');

class ViewManager {

	connectEvenHandlers() {
		// wire up event handler for form submit
		document.getElementById('form-submit')
			.addEventListener('submit', this.onSubmit.bind(this));
		document.getElementById('new-factor')
			.addEventListener('submit', this.newFactor.bind(this));
	}

	newFactor(event){
		// block form from actually submitting
		event.preventDefault();

		let div = document.createElement('div');
		let input = document.createElement('input');
		input.id = 'input-num';
		input.type = 'text';
		input.autocomplete = 'off';
		div.append(input);

		document.getElementById('form-numbers').append(div);

	}

	onSubmit(event){
		//block form from actually submitting
		event.preventDefault();
		// grab all the input
		let element = document.getElementsByTagName('input');

		// loop through the element value except the first one
		let num1 = 1;
		for(let j = 1; j < element.length; j++){
			num1 *= element[j].value;
		}
		// grab the first input value
		let num2 = document.getElementById('input-num1').value;
		// cast the strings to ints
		num2 = parseInt(num2, 10);
		// add the numbers
		const sum = multi(num1, num2);
		// output
		this.renderSum(sum);
	}

	renderSum(sum) {
		document.querySelector('.sum').textContent = sum;
	}
}

const viewManager = new ViewManager();
viewManager.connectEvenHandlers();