import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import Modal from './Modal';
import { Button, ButtonGroup } from 'ship-components-buttons';
import css from './Dialog.css';

/**
 * Part of a hack for showing dropdown menus that "hang off" of the dialog when dialog has overflow:hidden.
 * @type {String}
 */
const DROPDOWN_PARENT_CLASSNAME = "ship-components--dialog-body";

export default class Dialog extends Component {

  /**
   * Setup
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
    this.getButtons = this.getButtons.bind(this);
    this.getDefaultButtons = this.getDefaultButtons.bind(this);
  }

  getDefaultButtons() {
    return [{
      label: this.props.confirm,
      onClick: this.props.onConfirm
    }];
  }

  getButtons() {
    return this.props.buttons || this.getDefaultButtons();
  }

  render() {
    return (
      <Modal
        {...this.props}
        className={classNames(css.container, this.props.className, {[css[this.getDialogType()]]: !!this.getDialogType()})}
        disableClose={this.props.disableClose}
      >
        {this.props.name ?
          <h1 className={css.title}>{this.props.name}</h1>
        : null}
        <div className={classNames(css.body, DROPDOWN_PARENT_CLASSNAME)}>
          {this.props.message || this.props.children}
        </div>
        <ButtonGroup
          align='right'
          className={css.controls}
        >
          {this.getButtons().map(btn => {
            return (
              <Button
                key={btn.label}
                disabled={btn.disabled === true}
                onClick={btn.onClick}
              >
                  {btn.label}
              </Button>
            );
          })}
        </ButtonGroup>
      </Modal>
    );
  }
}

/**
 * Defaults
 * @type {Object}
 */
Dialog.defaultProps = {
  confirm: 'OK',
  cancel: 'Cancel',
  disableClose: false,
  disableConfirm: false
};

/**
 * Type Checks
 * @type {Object}
 */
Dialog.propTypes = {
  confirm: PropTypes.string,
  cancel: PropTypes.string,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
  disableClose: PropTypes.bool,
  disableConfirm: PropTypes.bool
}
