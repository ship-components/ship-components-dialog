import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import Modal from './Modal';
import { Button, ButtonGroup } from 'ship-components-buttons';
import css from './Dialog.css';

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
        className={classNames(css.container, this.props.className)}
        header={false}
      >
        {this.props.name ?
          <h1 className={css.title}>{this.props.name}</h1>
        : null}
        <div className={css.body}>
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
                onClick={btn.onClick} >
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
  disableConfirm: PropTypes.bool
}