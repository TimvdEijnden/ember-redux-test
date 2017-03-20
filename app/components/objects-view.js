import Ember from 'ember';
import { v4 } from 'ember-uuid';
const {
  A
} = Ember;

export default Ember.Component.extend({
  objects: A(),

  actions: {
    addObject(componentType) {
      this.get('objects').pushObject({
		uuid: v4(),
        component: componentType,
        styles: {
          backgroundColor: this.randomColor(100),
          width: 100,
          height: 100,
          left: Math.round((Math.random() * 500) + 10),
          top: Math.round((Math.random() * 400) + 10),
        }
      })
    },

	removeObject(uuidToRemove) {
		const filteredObjects = this.get('objects').filter((object) => { return object.uuid !== uuidToRemove });
		this.set('objects', filteredObjects);
	}
  },


  randomColor(brightness){
    function randomChannel(brightness){
      var r = 255-brightness;
      var n = 0|((Math.random() * r) + brightness);
      var s = n.toString(16);
      return (s.length==1) ? '0'+s : s;
    }
    return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
  }
});
