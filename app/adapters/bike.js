import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: '',
  pathForType(){
    return '/bike.json';
  }
});
