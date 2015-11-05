var React = require('react');
var ReactDOM = require('react-dom');
var Messagebox = require('./messagebox');
require('./message.css');

var options = {
    items:[
      'Henry',
      'Roger Federer',
      'Rafa Nadal'
    ],
    conversation:[
      'How are you?',
      'Go a movie',
      'Thanks!!'
    ],
    _source:[
      'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/p160x160/11738037_854744381242045_7674635674233757178_n.jpg?oh=7d1a34c72fd19716cae3839f917704e0&oe=56CC8EB4&__gda__=1456600031_84c3fa72dbfa9b54d8069bb2f72e97d8',
      'https://scontent-hkg3-1.xx.fbcdn.net/hphotos-xap1/t31.0-8/12138507_10153636829219941_8305340910542047253_o.jpg',
      'https://scontent-hkg3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/417601_10150630315256026_447771636_n.jpg?oh=b23d37654289de218e3ea76b2e9d946a&oe=56D25C28'
    ],
    talkHistory:[
      'To be,',
      'or not to be.',
      'That is a question.'
    ],
    mytalkHistory:[
      'To-do',
      'or not to-do',
      'There is no question.'
    ]
};
var element = React.createElement(Messagebox,options);
ReactDOM.render(element, document.querySelector('.chat-app'));
