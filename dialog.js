/**
 * Dialog
 * @file   dialog box configurable from the parent component's state.
 *         Dialog is triggered to appear when the parent passes a nonempty config.message prop.
 *         The callback props - config.onClose and config.onAccept - should pass an empty config.message
 *         triggering the dialog to disappear.
 */

import React from "react";

export default class Dialog extends React.Component {

	constructor () {
		super();
		this.close = this.close.bind(this);
		this.accept = this.accept.bind(this);
	}

	getDefaultProps() {
		return ({
			config: {
				message: "",
				positive: false,
				negative: "Close",
				onClose: null,
				onAccept: null
			}
		});
	}

  render() {

  	let config = this.props.config;
  	let open = false, acceptBtn;
  	
  	if (typeof config !== 'undefined' && 
				typeof config.message !== 'undefined' &&
				config.message !== "") 
  	{
  		open = true;
  		acceptBtn = (( typeof config.positive !== 'undefined' &&
  													config.positive != false ) ? 
  									( <span className="dialog-btn" onClick={ this.accept }> 
  										{ config.positive } 
  									</span> )
  									: null );
  	}

    return (
    	<div className={ "dialog-screen" + (open ? " visible" : "") } onClick={ this.close }>
    		<div className={ "dialog" + (open ? " visible" : "") } onClick={ this.blockClick } >
	    		<div className="dialog-message">{ config.message }</div>
	    		<div className="dialog-button-wrap">
		    		<div className="dialog-buttons">
			    		{ acceptBtn }
			    		<span className="dialog-btn" onClick={ this.close } >{ config.negative }</span>
		    		</div>
	    		</div>
	    	</div>
    	</div>
    )
  }

  close(click) {
  	click.stopPropagation();
  	this.props.config.onClose();
  }

  accept(click) {
  	click.stopPropagation();
  	this.props.config.onAccept();
  }

  /**
   * Used to interrupt the click event before reaching parent container (.dialog-screen), triggering the dialog to close
   * @param  {event} click 
   */
  blockClick(click) {
  	click.stopPropagation();
  }

}
