import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  summary: DS.attr('string'),
  barcode: DS.attr('string'),
  image: DS.attr('string')
});
