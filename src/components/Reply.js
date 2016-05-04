import React, { Component, PropTypes } from 'react';
import TextareaAutosize from 'react-autosize-textarea';

class Reply extends Component {
  constructor(props) {
    super(props);
    this.onFocusBlur = this.onFocusBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.replyClick = this.replyClick.bind(this);
    this.state = { active: false, text: '' };
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

  replyClick() {
    const content = this.refs.replybox.refs.textarea.value;
    this.props.addMessage(content);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="probe-message-reply" >
        <div className="probe-message-reply-response" >
          <div className="probe-message-reply-response__response float-label" >
            <label className={this.getClassName('__label')}>
              Reply to this Response
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
          <div className="probe-message-reply-response__button" >
            <input type="button" value={this.props.replyText} onClick={this.replyClick} />
          </div>
        </div>
      </div>
    );
  }
}

Reply.propTypes = {
};

export default Reply;
