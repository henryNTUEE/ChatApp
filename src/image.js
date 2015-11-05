var React = require('react');

module.exports = React.createClass({
  render: function(){
    return <div className = "thread-item_left ">
      <img className="img-circle" src={this.props.newImage} width="50" height="50" alt="" className="img"/>
    </div>
  }
});
