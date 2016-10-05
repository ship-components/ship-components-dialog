/** ****************************************************************************
 * Modal
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Generic Modal View
 ******************************************************************************/

// Modules
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import css from './Modals.css';

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
        className={classNames(css.container, this.props.className)}
      >
        {this.props.modals.map((modal, index) => {
          return (
            <div
              className={classNames(css.item, {
                [css.inactive] : index !== (this.props.modals.length - 1)
              })}
              key={modal.key}
            >
              {modal}
            </div>
          );
        })}
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
