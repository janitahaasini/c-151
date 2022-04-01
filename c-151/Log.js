// Registering component in log-component.js(having two-name and definition)
AFRAME.registerComponent('log', {
    schema: {
      message: {type: 'string', default: 'Hello, World!'}
    },
    //to setup initial state
    init: function () {
        console.log(this.data.message);
      }
  });

