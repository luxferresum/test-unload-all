import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  findRecord() {
    return {
      data: {
        id: '1',
        type: 'bar',
        attributes: {},
      },
    };
  }
});
