import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import css from './Dialog.css';

/**
 * This is mostly an alias for Dialog
 * @alias
 */
export default class FormDialog extends Component {
  /**
   * Which buttons to shallow
   * @return {Array<Object>}
   */
  getDefaultButtons() {
    return [
      {
        label: this.props.cancel,
        disabled: this.props.disableClose,
        onClick: this.props.onClose
      },
      {
        label: this.props.confirm,
        disabled: this.props.disableConfirm,
        onClick: this.props.onConfirm
      }
    ];
  }

  getButtons() {
    return this.props.buttons || this.getDefaultButtons();
  }

  render() {
    return (
      <Dialog
        {...this.props}
        className={`${this.props.className || ''} ${css.formDialog}`}
        buttons={this.getButtons()}
      />
    )
  }
}

/**
 * Defaults
 * @type {Object}
 */
FormDialog.defaultProps = {
  confirm: 'Submit',
  cancel: 'Cancel',
  disableClose: false,
  disableConfirm: false
};

/**
 * Type Checks
 * @type {Object}
 */
FormDialog.propTypes = {
  confirm: PropTypes.string,
  cancel: PropTypes.string,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func
};
