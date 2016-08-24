import EventEmitter from 'events';
import Promise from 'bluebird';
import React from 'react';

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
    var actions = this;

    // Return a promise
    return new Promise(resolve => {
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
          var args = Array.prototype.slice.call(arguments);

          // Call original
          if (typeof onConfirm === 'function') {
            onConfirm.apply(this, args);
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
          if (typeof onClose === 'function') {
            // Pass it all through
            var args = Array.prototype.slice.call(arguments);
            onClose.apply(this, args);
          }

          actions.emit('close', component);
        }
      });

      // Let the world know
      actions.emit('open', component);
    });
  }
}

/**
 * Export a singleton by default
 */
const instance = new ModelActions();

export default instance;
