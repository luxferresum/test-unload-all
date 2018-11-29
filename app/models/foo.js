import DS from 'ember-data';

export default DS.Model.extend({
  bar: DS.belongsTo('bar'),
  value: DS.attr('number'),
});
