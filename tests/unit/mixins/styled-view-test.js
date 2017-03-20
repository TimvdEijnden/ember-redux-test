import Ember from 'ember';
import StyledViewMixin from 'redux-test/mixins/styled-view';
import { module, test } from 'qunit';

module('Unit | Mixin | styled view');

// Replace this with your real tests.
test('it works', function(assert) {
  let StyledViewObject = Ember.Object.extend(StyledViewMixin);
  let subject = StyledViewObject.create();
  assert.ok(subject);
});
