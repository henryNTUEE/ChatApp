var React = require('react');
var ListItem = require('./list-item');
var Itemcontent = require('./item-content');
var IImage = require('./image');
var TalkHistory = require('./talk-history');
var MyHistory = require('./myHistory');
var AppendTalk = require('./appendTalk');
var CheckClick = require('./check-click');

module.exports = React.createClass({
    handleClick: function(newItem){
      this.arr=[];
      this.setState({
        click: true,
        itemTitle: newItem
      });
    },
    getInitialState: function(){
      return {click: false, value:''}
    },

    arr: new Array(),
    hold: new Array(3),
    aar: new Array(),


    add: function(event){
      if(event.keyCode == 13){
            this.setState({value: event.target.value});
            this.arr.push(event.target.value);
            event.target.value="";

            if(this.state.itemTitle === 'Henry'){
              this.hold[0] = this.arr;
            }
            if(this.state.itemTitle === 'Roger Federer'){
              this.hold[1]  = this.arr;
            }
            if(this.state.itemTitle === 'Rafa Nadal'){
              this.hold[2]  = this.arr;
            }
         }
    },

    render: function(){
      var content = this.props.conversation.map(function(a){
          return <Itemcontent newTalk={a} />
      });
      var image = this.props._source.map(function(a){
          return <IImage newImage={a} />
      });
      var histalk = this.props.talkHistory.map(function(a){
          return <TalkHistory oldHistory={a} />
      });

      var myhistalk = this.props.mytalkHistory.map(function(a){
          return <MyHistory myoldHistory={a}/>
      });
      var append = this.arr.map(function(a){
          return <AppendTalk add={a} />
      });
      var pass_hold = this.hold.map(function(a,index){
          return a;
      });


      var list = this.props.items.map(function(a,index){
              return <ListItem
                    whenClicked={this.handleClick}
                    newItem = {a}
                    newContent = { ((undefined !== pass_hold[index] && pass_hold[index].length))? pass_hold[index][pass_hold[index].length-1] : "That is a question."}
                    newPhoto = {image[index]}
                    className={"thread-item "}
                    />
      }.bind(this));
      return <div>
            <div className="chat-app_left">
                <div className="heading">
                  <h3 className = "mesenger-title">Messenger</h3>
                </div>
                <div className="thread-list">
                        {list}
                </div>
             </div>
             <div className="chat-app_right">
               <div className="heading">
                  <div className="current-target">{this.state.itemTitle}</div>
               </div>
               <CheckClick his={histalk} app={append} check={this.state.click}/>
               <div className="footer">
                <input
                className="new-message"
                  type="text"
                  onChange={this.handleChange}
                  onKeyDown={this.add}
                   />
               </div>
             </div>
            </div>
      }
});
