import EventEmitter from 'events';
import ModalActions from './ModalActions';

/**
 * Stores all open modals and emits change events when a modal is added
 * or removed that we can listen to
 */
export class ModelStore extends EventEmitter {

  /**
   * Setup
   */
  constructor() {
    super();
    this._state = [];

    this.__handleOpen = this.__handleOpen.bind(this);
    this.__handleClose = this.__handleClose.bind(this);

    ModalActions.on('open', this.__handleOpen);
    ModalActions.on('close', this.__handleClose);
  }

  /**
   * Return a shallow clone of the state so we con't accidently mutate the state
   * @public
   * @return {Array<Object>}
   */
  getState() {
    return this._state.slice(0);
  }

  /**
   * Used to listen to when modals are added or removed
   * @public
   * @param  {Function} fn
   * @return {Object}
   */
  onChange(fn) {
    this.on('change', fn)
    return {
      remove: () => {
        this.removeListener('change', fn);
      }
    }
  }

  /**
   * Handles updating the state and emitting change events when the number of
   * modals changes
   * @private
   * @param {Array<Object>} state    This is the updated state to set. It
   *                                 does not merge like normal.
   */
  __setState(state) {
    // Check if changed
    let changed = false;
    if(state.length !== this._state.length) {
      changed = true;
    }

    this._state = state;

    if (changed) {
      // Delay until next loop to let react finish it's life cycles
      setTimeout(()=>{
        // Let the world know
        this.emit('change');
      }, 0);
    }
  }

  /**
   * Event triggered from ModalActions.on('open')
   * @param  {React} component
   */
  __handleOpen(component) {
    let state = this.getState();
    state.push(component);

    // Update
    this.__setState(state);
  }

  /**
   * Event triggered from ModalActions.on('close')
   * @private
   * @param  {React} component
   */
  __handleClose(component) {
    // Most likely the first index as we only render the first but check anyway
    let index = this._state.findIndex(item => item === component);

    let state = this.getState();
    state.splice(index, 1);

    // Update
    this.__setState(state);
  }
}

/**
 * Export a singleton by default
 */
const instance = new ModelStore();

export default instance;
