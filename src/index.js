/**
 * Package Exports
 */

import modal from './Modal';
import modals from './Modals';
import modalActions from './ModalActions';
import modalStore from './ModalStore';

import dialog from './Dialog';
import alert from './Alert';
import confirm from './Confirm';
import formDialog from './FormDialog';

export const Modal = modal;
export const Modals = modals;
export const ModalActions = modalActions;
export const ModalStore = modalStore;

export const Dialog = dialog;
export const Alert = alert;
export const Confirm = confirm;
export const FormDialog = formDialog;

/**
 * Part of a hack for showing dropdown menus that "hang off" of the dialog when dialog has overflow:hidden.
 * @type {String}
 */
export const DROPDOWN_PARENT_CLASS = 'ship-components--dialog-body';
