import Dialog from './Dialog';

/**
 * This is mostly an alias for Dialog
 * @alias
 */
export default class FormDialog extends Dialog {

  /**
   * Which buttons to shallow
   * @return {Array<Object>}
   */
  getButtons() {
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

  getDialogType() {
    return "formDialog";
  }
}
