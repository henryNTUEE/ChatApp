var React = require('react');
var Itemcontent = require('./item-content')

module.exports = React.createClass({

 
  handleClick: function(){
    this.props.whenClicked(this.props.newItem);
  },
  render: function(){
    return <div>
    <li onClick={this.handleClick} className={this.props.className}>
      <a  className="_1ht5 _5l-3">
      <div className="clearfix">
        {this.props.newPhoto}
        <div className="thread-item_right">
          <div className = "thread-from">
          {this.props.newItem}
          </div>
          <div>
            {this.props.newContent}
          </div>
        <span className="thread-time">10:00am</span>
        </div>
      </div>
      </a>
      </li>
      </div>

  }

});
