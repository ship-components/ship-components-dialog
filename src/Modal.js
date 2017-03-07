/** ****************************************************************************
 * Modal
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Generic Modal View
 ******************************************************************************/

// Modules
import React from 'react';
import classNames from 'classnames';
import css from './Modal.css';

export default class Modal extends React.Component {

  constructor(props){
    super(props);
    this.handleWindowKeyDown = this.handleWindowKeyDown.bind(this);
    this.handleClickBackground = this.handleClickBackground.bind(this);
    this.handlePopState = this.handlePopState.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleWindowKeyDown);
    if (this.props.closeOnLeave) {
      window.addEventListener('popstate', this.handlePopState);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleWindowKeyDown);
    window.removeEventListener('popstate', this.handlePopState);
  }

  handlePopState(event) {
    if (!this.props.disableClose && this.props.closeOnLeave) {
      this.props.onClose(event);
    }
  }

  handleWindowKeyDown(event) {
    if (!this.props.disableClose && (event.code === 'Escape' || event.keyCode === 27)) {
      this.props.onClose(event);
    }
  }

  /**
   * Check to see if the use clicked the background or not
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  handleClickBackground(event) {
    if (this.props.disableClose) {
      return;
    }

    let el = event.target;
    let source = el;
    while (source.parentNode) {
      if (source === this.refs.container) {
        return;
      }
      source = source.parentNode;
    }
    // Prevent the click from affecting things behind it
    event.stopPropagation();

    this.props.onClose(event);
  }

  /**
   * Render
   * @return {[React}
   */
  render() {
    return (
      <div
        className={css.overlay}
        style={this.props.style}
        onMouseDown={this.handleClickBackground}
      >
          <div
            ref='container'
            className={css.container}
          >
              <div className={classNames(css.body, this.props.className)}>
                {this.props.children}
              </div>
          </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  title: null,
  header: true
};

Modal.propTypes = {
  onClose: React.PropTypes.func.isRequired
};
