import DS from 'ember-data';
import { computed } from "@ember/object";

export default DS.Model.extend({
  foos: DS.hasMany('foo'),
  totalFoos: computed('foos.@each.value', {
    get() {
      return this.foos
        .filter(x => x)
        .map(f => f.value)
        .reduce((a, b) => a+b, 0);
    }
  }),
});
