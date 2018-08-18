import PropTypes from 'prop-types';
import React from 'react';
import CodeMirror from 'react-codemirror';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');

class JsonEditor extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      json: props.json
    };

    this.updateJson = this.updateJson.bind(this);
  }

  updateJson(newJson) {
    console.log(`Updating JSON ${this.state.json}`);
    this.setState({
      json: newJson,
    });
  }

  render() {
    return(
      <CodeMirror 
        value={`const settings = ${JSON.stringify(this.state.json, null, 4)}`}
        onChange={this.updateJson}
        options={this.props.options}
      />
    );
  }

}

JsonEditor.propTypes = {
  // actions: PropTypes.object.isRequired,
  readOnly: PropTypes.bool,
  options: PropTypes.object
};

JsonEditor.defaultProps = {
  readOnly: false, 
  options: {
    lineNumbers: true,
    mode: 'javascript',
    json: true,
  }
};

export default JsonEditor;
