var createPage = {
		callTitle: function() {
			createHtml.createTitle('Тест по программированию');
		},
		callQuestion: function() {
			for (var i = 1; i <=  3; i++) {
				createHtml.createQuestion('. Вопрос № ', i);
			for (var j = 1; j <= 3; j++) {
				createHtml.createAnswer('Вариант ответа №', j);
		}
		}
		},
		callButton: function() {
			createHtml.createButton('Проверить мои результаты')
		},
		callPage: function() {
			this.callTitle();
			this.callQuestion();
			this.callButton();
		}
}

var createHtml = {
	newVariable: function(element, text, classAdd, parent) {
		var variable = document.createElement(element);
		this.addElement(variable, parent);
		this.addText(variable, text);
		this.addClass(variable, classAdd);
			if (element === 'input') {
		this.addAttribute(variable, 'type', 'checkbox');
			};
			if (element === 'button') {
		this.addAttribute(variable, 'type', 'submit');
			};
		return variable;
	},


	addElement: function(element, parent) {
		if (parent != undefined && parent != '') {
		  parent.appendChild(element);
		}
		else {
		document.body.appendChild(element);
	}
	},
	addText: function(element, text) {
		element.innerHTML = text;
	},
	addClass: function(element, classAdd) {
		element.className = classAdd;
	},
	addAttribute: function(element, type, value) {
		element.setAttribute(type, value);
	},


	createTitle: function() {
		this.newVariable('h1', 'Тест по программированию', 'text-center alert alert_title alert-success col-lg-6 col-lg-offset-3');
	},
	createQuestion: function(text, number) {
		this.newVariable('p', number + text+number, 'lead alert alert-danger col-lg-4 col-lg-offset-4');
	},
	createAnswer: function(text, number) {
	 var box = this.newVariable('div', '', 'alert alert-danger col-lg-4 col-lg-offset-4');
		this.newVariable('input', '', 'col-lg-2 col-lg-offset-2', box);
		this.newVariable('label', text+number, 'col-lg-6', box);
	},
	createButton: function() {
		this.newVariable('button', 'Проверить мои результаты', 'btn btn-primary col-lg-2 col-lg-offset-5')
	}

}
createPage.callPage();
