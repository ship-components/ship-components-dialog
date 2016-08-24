jest.dontMock('../ModalStore');

import ModalStore from '../ModalStore';

const publicFunctions = ['getState', 'onChange'];

describe('ModalStore', function(){
  it('should have public functions: ' + publicFunctions.join(','), function() {
    publicFunctions.forEach(function(fnName){
      expect(typeof ModalStore[fnName]).toBe('function');
    })
  });
});
