var React = require('react')

module.exports = React.createClass({
  render: function(){
    return <div className = "message-item message-from-me">
      <span>{this.props.myoldHistory}</span>
    </div>
  }
});
