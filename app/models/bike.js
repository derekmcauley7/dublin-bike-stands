import DS from 'ember-data';
import Model from 'ember-data/model'

const { attr } = DS;

export default Model.extend({
  location_stand: attr('string'),
  no_stands: attr('string'),
  protection_weather: attr('string'),
  security_safetyrating: attr('string'),
  X: attr('string'),
  Y: attr('string')
});
