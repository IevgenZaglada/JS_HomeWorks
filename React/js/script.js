const Component = React.createClass({
  getDefaultProps: function (){
    return {
      welcome: 'Welcome'
    }
  },
  getInitialState: function () {
    return {
      status: true,
      transitionStatus: false
    }
  },

  render: function() {
    var showName = (
      <h3>Dima</h3>
    );

        var showDima = this.state.status ? (
      <h2>Big Dima</h2>
    ) : (
      <h1>Even bigger Dima</h1>
    );

    var showTransition = this.state.transitionStatus ? (
      <p>Simple transition</p>
    ) : null;

    var changeStatus = () => { // this arrow used to lock scope vision iside of func
      this.setState({
        status: !this.state.status // аналогия if/else, делает то же самое
      });
    };

        var changeTransitionStatus = () => {
      this.setState ({
        transitionStatus: !this.state.transitionStatus
      })
    }

    return (
      <div>
      <h1>Welcome</h1>
      <div onClick={ changeStatus }>Dima magic</div>
      { showName }
      { showDima }
      <div onClick={ changeTransitionStatus }>Click me also</div>
      { showTransition }


      </div>
    );
  }
});

React.render(
//   <h1>Greetings</h1>,
  <Component/>,
  document.getElementById('container')
)
