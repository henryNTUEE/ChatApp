var React = require('react');

module.exports = React.createClass({
  render: function(){
    return <span className = "thread-content">
              {this.props.newTalk}
           </span>
  }
});
