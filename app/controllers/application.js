import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  store: service(),
  value: 100,
  actions: {
    test() {
      this.store.unloadAll('foo');
      this.store.createRecord('foo', {
        bar: this.model,
        value: Number.parseFloat(this.value)
      });
    },
    unloadAll() {
      this.store.unloadAll('foo');
    }
  }
});
