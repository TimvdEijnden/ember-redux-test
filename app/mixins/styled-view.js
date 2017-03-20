import Ember from 'ember';
const {
	computed,
	get,
	String: {
		dasherize,
		htmlSafe
	}
} = Ember;

export default Ember.Mixin.create({
	classNames: ['styled-view'],
	attributeBindings: ['viewStyle:style'],

	viewStyle: computed('object.styles.{backgroundColor,width,height,top,left}', function() {
		const styles = get(this, 'object.styles');
		let stylesString = '';
		let unit = '';
		for (var key in styles) {
			if (styles[key][0] !== '#') {
				unit = 'px';
			}
			stylesString += `${dasherize(key)}:${styles[key]}${unit};`;
		}
		return htmlSafe(stylesString);
	})
});
