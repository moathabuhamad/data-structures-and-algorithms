'use strict';
const insertion = require('../insertion-sort');

describe('insertion sort ',() => {
  test('it should return the array sorted from lowest to biggest', () => {
    expect(insertion([4,8,5,6,3,2])).toStrictEqual([2,3,4,5,6,8]);
  });
}); 