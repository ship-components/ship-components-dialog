import Dialog from './Dialog';

/**
 * Alias for Dialog
 * @alias Dialog
 */
export default class Alert extends Dialog {

  /**
   * Which buttons to show
   * @return {Array<Object>}
   */
  getButtons() {
    return [{
      label: this.props.confirm,
      onClick: this.props.onConfirm
    }];
  }
}

/**
 * Defaults
 * @type {Object}
 */
Alert.defaultProps = {
  confirm: 'OK',
  disableConfirm: false
};
