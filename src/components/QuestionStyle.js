import React, { Component, PropTypes } from 'react';
import ProbeStimulus from './ProbeStimulus';
import Reply from './Reply';

class QuestionStyle extends Component {
  render() {
    return (
      <div className="question-probe" >
        <div className="question-probe__stimulus" >
          <ProbeStimulus {...this.props} />
        </div>
        <div className="question-probe__response" >
          <Reply {...this.props} replyText="Finish" />
        </div>
      </div>
    );
  }
}

QuestionStyle.propTypes = {
};

export default QuestionStyle;
