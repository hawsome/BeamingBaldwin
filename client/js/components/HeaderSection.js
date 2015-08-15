var React = require('react');

var HeaderSection = React.createClass({

  render: function() {
    return (
      <header className="Header">
        <button
          className="Header__newThreadBtn"
          onClick={this._onNewThreadBtnClick}
        >New Thread</button>
      </header>
    );
  },

  _onNewThreadBtnClick: function() {
    console.log('new thread button');
  },
});

module.exports = HeaderSection;
