import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reserve/modal-reserve', 'Integration | Component | reserve/modal reserve', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{reserve/modal-reserve}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#reserve/modal-reserve}}
      template block text
    {{/reserve/modal-reserve}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
