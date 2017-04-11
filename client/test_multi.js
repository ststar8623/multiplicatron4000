const multi = require('./multi.js');

class TestSuite {

	runTest(testName){
		const result = this[testName]();
		console.log(result, testName);
	}

	runTests(){
		Object.getOwnPropertyNames(Object.getPrototypeOf(this))
			.filter(prop => this[prop] instanceof Function)
			.filter(prop => prop.indexOf('test') !== -1)
			.forEach(testName => this.runTest(testName));
	}

	assertEquals(a,b){
		return a === b;
	}

	testMultiPositiveNumbers(){
		return this.assertEquals(multi(5, 7), 35);
	}

	testMultiNegativeNumbers(){
		return this.assertEquals(multi(-5, -7), 35);
	}

	testMultiPositiveAndNegativeNumbers(){
		return this.assertEquals(multi(-5, 7), -35);
	}
}

const testSuite = new TestSuite();
testSuite.runTests();