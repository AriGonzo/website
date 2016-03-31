'use strict';

describe('Controller: CfpctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('gr8app2016App'));

  var CfpctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CfpctrlCtrl = $controller('CfpctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
