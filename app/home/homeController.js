export default class homeController {

	static get $inject() { return ['randomNames']; }

	constructor(randomNames) {

		this.name = "World";
		this.randomNames = randomNames;
		this.randomNames.addNames('TJ', 'Pin Head', 'Sandro');
	}

	changeName() {

		var javascript = 'es6';
		var framework = 'Angular';
		var tech = { javascript, framework };

		this.name = `fun with ${tech.javascript.toUpperCase()} & ${tech.framework}!`;
	}

	randomName() {

		this.name = this.randomNames.getName();
	}
}

//homeController.$inject = ['randomNames'];
