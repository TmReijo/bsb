/*global angular */

'use strict';

describe('Unit: GameCtrl', function() {

  var ctrl;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    angular.mock.inject(function($controller) {
      ctrl = $controller('GameCtrl');
    });
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

  it('should have a number variable equal to 1234', function() {
    expect(ctrl.number).toEqual(1234);
  });

  it('Should have nice title', function() {
    expect(ctrl.title).toEqual('Bullshit Bingo Time!');
  });

});
