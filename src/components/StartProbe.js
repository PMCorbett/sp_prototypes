import React, { Component, PropTypes } from 'react';
import TextareaAutosize from 'react-autosize-textarea';

class StartProbe extends Component {
  constructor(props) {
    super(props);
    this.onFocusBlur = this.onFocusBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = { active: false, text: '' };
  }

  sendProbe() {
    alert('Ow, don\'t click that again');
  }

  onFocusBlur() {
    this.setState({ active: !this.state.active });
  }

  onChange(event) {
    this.setState({ text: event.target.value });
  }

  getClassName(suffix = '') {
    const blockName = 'float-label';
    const baseName = blockName + suffix;
    if (this.isActiveOrNotBlank()) {
      return `${baseName} ${baseName}--active`;
    }
    return baseName;
  }

  isActiveOrNotBlank() {
    return (this.state.active) || (this.state.text !== '');
  }

  noop() {

  }

  render() {
    return (
      <div className="start-probe" >
        <div className="start-probe__background" onClick={this.props.toggleProbe}></div>
        <div className="start-probe__content" onClick={this.noop}>
          <div className="start-probe__header" >
            Probe Message
          </div>
          <div className="start-probe__date" >
            {new Date().toString()}
          </div>
          <div className="start-probe__response" >
            <b>Repsonse</b>
            <span>Things about animals, Iteration 3</span>
          </div>
          <div className="start-probe__from" >
            <b>From</b>
            <span>Jerry Gergich</span>
          </div>
          <div className="start-probe__to" >
            <b>To</b>
            <span>Jane Fonda</span>
          </div>
          <div className="start-probe__message float-label" >
            <label className={this.getClassName('__label')}>
              Message Probe Text
            </label>
            <TextareaAutosize
              className={this.getClassName('__textarea')}
              onFocus={this.onFocusBlur}
              onBlur={this.onFocusBlur}
              onChange={this.onChange}
              value={this.state.text}
              ref="replybox"
            />
          </div>
          <div className="start-probe__action" >
            <button onClick={this.sendProbe} >Send Probe</button>
          </div>
        </div>
      </div>
    );
  }
}

StartProbe.propTypes = {
};

export default StartProbe;
