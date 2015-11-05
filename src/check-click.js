var React = require('react')

module.exports = React.createClass({
  render: function(){
    var hisList = this.props.his.map(function(a){
      return a;
    });
    var myAppend = this.props.app.map(function(a){
      return a;
    });
    if(this.props.check === true){
      return <div className="message-list">
          {hisList},{myAppend}
      </div>
    }
    else{
      return <div></div>
    }
  }
});
