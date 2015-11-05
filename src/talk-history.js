var React = require('react')

module.exports = React.createClass({
  render: function(){
    return <div className = "message-item message-from-other">
      <span>{this.props.oldHistory}</span>
    </div>
  }
});
