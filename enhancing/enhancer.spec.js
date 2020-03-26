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
  enhancement: 20
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
      if(item.enhancement === 20){
        expect(enhancedItem.enhancement).toEqual(originalEnhancement);
      }else{
        expect(enhancedItem.enhancement).toEqual(originalEnhancement + 1);
      }
    });

    it('.does not increase the enhancement beyond 20', function () {
      expect(enhancer.succeed(item).enhancement).toBeLessThanOrEqual(20);
    });

    it('.does not change item durability', function () {
      let origDurability= item.durability;
      expect(enhancer.succeed(item).durability).toBeLessThanOrEqual(origDurability);
    });

    it('.returns a **NEW** item', function () {
      const repairedItem= enhancer.succeed(item);
      expect(repairedItem).not.toBe(item);
    });

  })//end succeed

  describe('the fail() function', () => {
    /**
   * 
   * //If the item's enhancement is less than 15, the durability of the item is decreased by 5.
- If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
- If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
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

    it('.returns a **NEW** item', function () {
      const repairedItem= enhancer.fail(item);
      expect(repairedItem).not.toBe(item);
    });
    
    it('.returns an item with its durability decreased by 5, 10 or 1 based on the enhancement level', () => {
      if( item.enhancement < 15 ){
        expect( enhancer.fail(item).durability ).toEqual(item.durability - 5);

      }else if( item.enhancement >= 15 && item.enhancement < 17 ){
        
        expect( enhancer.fail(item).durability ).toEqual(item.durability - 10);
      }else{
        expect( enhancer.fail(item).durability ).toEqual(item.durability - 1);
      }//end if/else block
    })

  })//end fail

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

    it('.returns an item with durability restored to 100', function () {
      expect(enhancer.repair(item).durability).toEqual(100);
    });

    it('.returns a **NEW** item', function () {
      const repairedItem= enhancer.repair(item);
      expect(repairedItem).not.toBe(item);
    });

  })//end repair

  describe('get() function', () => {
    it('works', () => {

    });
  })//end get

})//end enhancer