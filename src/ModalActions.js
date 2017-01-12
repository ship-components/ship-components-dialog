import EventEmitter from 'events';
import Promise from 'bluebird';
import React from 'react';

/**
 * Error Message to track canceled modals
 * @type    {String}
 */
const ERROR_CANCEL = 'ModalCanceled';

// Ensure bluebird is the right version. config is only in the 3.0 API
if (typeof Promise.config !== 'function') {
  throw new Error('Wrong version of bluebird');
}

// Enabled cancelling
Promise.config({
  cancellation: true
});

/**
 * Modal actions handle creating and closing Modals
 */
export class ModelActions extends EventEmitter {

  /**
   * Emits an open modal event and returns a promise when it is confirmed
   * @param  {React} component
   * @return {Promise}
   */
  open(component) {
    /**
     * Save a reference to the instance of the actions so we can access the
     * event emitter
     * @type {ModalActions}
     */
    let actions = this;

    // Return a promise so we can do cool chains
    const _promise = new Promise((resolve, reject) => {
      // Save original callback
      const onConfirm = component.props.onConfirm;
      const onClose = component.props.onClose;

      // Extend component
      component = React.cloneElement(component, {
        /**
         * Give it a unique key
         * @type {Number}
         */
        key: Date.now(),

        /**
         * Hijack callback so we can resolve the promise
         */
        onConfirm(){
          // Pass it all through
          const args = Array.prototype.slice.call(arguments);

          // Call original
          if (typeof onConfirm === 'function' && onConfirm.apply(this, args) === false) {
            // If it's false, don't close
            return;
          }

          // Let the store know to clean it up
          actions.emit('close', component);
          // Finish promise
          resolve.apply(this, args);
        },

        /**
         * Hijack onClose so we can inject our flux workflow into it
         */
        onClose(){
          const args = Array.prototype.slice.call(arguments);

          if (typeof onClose === 'function') {
            // Pass it all through
            onClose.apply(this, args);
          }

          actions.emit('close', component);
          // We reject so we can complete the promise chain
          reject(new Error(ERROR_CANCEL));
        }
      })

      // Let the world know
      actions.emit('open', component);
    })
    .catch(err => {
      if (err.message === ERROR_CANCEL) {
        // User cancelled, end the promise and call 'finally'
        _promise.cancel();
      } else {
        throw err;
      }
    })

    return _promise;
  }
}

/**
 * Export a singleton by default
 */
const instance = new ModelActions();

export default instance;
