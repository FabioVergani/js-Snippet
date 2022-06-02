const kebabCaseRegex = /(\-\w)/g;
const regexEscapeRegex = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

const onlyWhiteSpace = /^\s$/;
const trueRegex = /^true$/i;
const falseRegex = /^false$/i;

const notEmptyOrWhiteSpace = /\S/;

const parseStringToType = str => {
	if (str.length == 0 || onlyWhiteSpace.test(str)) return str;
	if (trueRegex.test(str)) return true;
	if (falseRegex.test(str)) return false;
	if (notEmptyOrWhiteSpace.test(str)) {
		const temp = +str;
		if (!isNaN(temp)) return temp;
	}
	return str;
};

const kebabCaseToCamelCase = str => str.replace(kebabCaseRegex, m => m[1].toUpperCase());

const getDataAttributesValues = el => {
	if (!el) return null;
	const returnValue = {};
	if (el.dataset) {
		for (const prop in el.dataset) {
			if (el.dataset.hasOwnProperty(prop)) {
				returnValue[prop] = parseStringToType(el.dataset[prop] || '');
			}
		}
	} else {
		for (let i = 0; i < el.attributes.length; i++) {
			if (!/^data\-/.test(el.attributes[i].name)) continue;
			const name_1 = kebabCaseToCamelCase(el.attributes[i].name.replace('data-', ''));
			returnValue[name_1] = parseStringToType(el.attributes[i].value);
		}
	}
	return returnValue;
};
