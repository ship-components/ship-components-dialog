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
import ModalStore from './ModalStore';

export default class Modals extends Component {

  /**
   * Setup
   */
  constructor(props) {
    super(props);

    // Initial State
    this.state = {
      store: ModalStore.getState()
    };

    // Binding
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }

  /**
   * Listen
   */
  componentDidMount() {
    this.listener = ModalStore.onChange(this.handleStoreChange);
  }

  /**
   * Cleanup
   */
  componentWillUnmount() {
    this.listener.remove();
  }

  /**
   * Update the store
   */
  handleStoreChange() {
    this.setState({
      store: ModalStore.getState()
    });
  }

  /**
   * Either get the modals from the props or from the store itself
   */
  getModals() {
    if (this.props.modals instanceof Array) {
      return this.props.modals;
    } else {
      return this.state.store;
    }
  }

  /**
   * Render
   * @return {React}
   */
  render() {
    const modals = this.getModals();

    if (modals.length === 0) {
      return null;
    }

    return (
      <div
        className={classNames(css.container, this.props.className)}
      >
        {modals.map((modal, index) => {
          return (
            <div
              className={classNames(css.item, {
                [css.inactive] : index !== (modals.length - 1)
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
  modals: PropTypes.array
};
