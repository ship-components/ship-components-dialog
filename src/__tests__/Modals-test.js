jest.unmock('../Modals');

// Don't need to test these and they currently throw errors
jest.setMock('ship-components-highlight-click', 'div');

import React from 'react';
import TestUtils from 'react-dom/test-utils';
import Modals from '../Modals';

describe('Modals', function(){
  it('should support a className prop when a modal is present', function() {
    const customClassName = 'test-class';

    let reactTree = TestUtils.renderIntoDocument(
      <Modals
        className={customClassName}
        modals={[<div />]}
      />
    );

    let el = TestUtils.findRenderedDOMComponentWithClass(reactTree, customClassName);

    expect(el).toBeDefined();
  });
});
