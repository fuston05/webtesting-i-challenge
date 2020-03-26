const enhancer = require('./enhancer.js');
// test away!

/**
 * item={
  name: ''.
  durability: '0-100',
  enhancement: '0-20'
}
 */

const item = {
  name: 'scott',
  durability: 100,
  enhancement: 19
}

describe('enhancer.js', () => {
  describe('the succeed() function', () => {
    /**
     * a `success(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement success.
     */
    it('.returns an obj with a name property', function () {
      expect(enhancer.repair(item)).toHaveProperty('name');
    });

    it('.returns an obj with a durability property', function () {
      expect(enhancer.repair(item)).toHaveProperty('durability');
    });

    it('.returns an obj with an enhancement property', function () {
      expect(enhancer.repair(item)).toHaveProperty('enhancement');
    });

    it('.returns obj with the items enhancement increased by 1', function () {
      const enhancedItem = enhancer.succeed(item);
      const originalEnhancement = item.enhancement;
      expect(enhancedItem.enhancement).toEqual(originalEnhancement + 1);
    });

    it('.does not increase the enhancement beyond 20', function () {
      expect(enhancer.succeed(item).enhancement).toBeLessThanOrEqual(20);
    });



  })//end succeed

  describe('the fail() function', () => {
    /**
     * a `fail(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement failure.
     */
    it('.returns an obj with a name property', function () {
      expect(enhancer.repair(item)).toHaveProperty('name');
    });

    it('.returns an obj with a durability property', function () {
      expect(enhancer.repair(item)).toHaveProperty('durability');
    });

    it('.returns an obj with an enhancement property', function () {
      expect(enhancer.repair(item)).toHaveProperty('enhancement');
    });

  })//end succeed

  describe('the repair() function', () => {
    /**
       * a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. This method is the simplest of the three and would be a **good starting point** on this project.
       */
    it('.returns an obj with a name property', function () {
      expect(enhancer.repair(item)).toHaveProperty('name');
    });

    it('.returns an obj with a durability property', function () {
      expect(enhancer.repair(item)).toHaveProperty('durability');
    });

    it('.returns an obj with an enhancement property', function () {
      expect(enhancer.repair(item)).toHaveProperty('enhancement');
    });
  })//end succeed

  describe('get() function', () => {
    it('works', () => {

    });
  })//end succeed

})//end enhancer