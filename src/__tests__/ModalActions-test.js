jest.dontMock('../ModalActions');

import ModalActions from '../ModalActions';

const publicFunctions = ['open'];

describe('ModalActions', function(){
  it('should have public functions: ' + publicFunctions.join(','), function() {
    publicFunctions.forEach(function(fnName){
      expect(typeof ModalActions[fnName]).toBe('function');
    })
  });
});
