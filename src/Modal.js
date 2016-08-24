/** ****************************************************************************
 * Modal
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Generic Modal View
 ******************************************************************************/

// Modules
import React from 'react';
import classNames from 'classnames';
import {Button} from 'ship-components-buttons';
import css from './Modal.css';
import icon from 'ship-components-icon';

export default class Modal extends React.Component {

  constructor(props){
    super(props);
    this.handleWindowKeyDown = this.handleWindowKeyDown.bind(this);
    this.handleClickBackground = this.handleClickBackground.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleWindowKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleWindowKeyDown);
  }

  handleWindowKeyDown(event) {
    if (event.code === 'Escape' || event.keyCode === 27) {
      this.props.onClose(event);
    }
  }

  renderTitle() {
    if(!this.props.title || !this.props.header) {
      return null;
    }
    return (
      <h1 className={classNames(css.title)}>
        {this.props.title}
      </h1>
    );
  }

  renderCloseButton() {
    if(!this.props.header) {
      return null;
    }
    return (
      <Button
        className={classNames(css.close)}
        type='flat'
        iconClass={icon.close}
        onClick={this.props.onClose}
      />
  );
  }

  /**
   * Check to see if the use clicked the background or not
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  handleClickBackground(event) {
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
              {this.renderTitle()}
              {this.renderCloseButton()}
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
