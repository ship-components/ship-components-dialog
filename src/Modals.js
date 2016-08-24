/** ****************************************************************************
 * Modal
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Generic Modal View
 ******************************************************************************/

// Modules
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Modals extends Component {
  /**
   * Render
   * @return {[React}
   */
  render() {
    if (this.props.modals.length === 0) {
      return null;
    }
    return (
      <div
        className={classNames(this.props.className)}
      >
        {this.props.modals[0]}
      </div>
    );
  }
}

/**
 * Type Checking
 * @type {Object}
 */
Modals.propTypes = {
  modals: PropTypes.array.isRequired
};
