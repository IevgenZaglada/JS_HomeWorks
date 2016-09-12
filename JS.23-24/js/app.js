requirejs.config({
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery',
    'tmpl': 'tmpl'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'tmpl': {
      exports: 'tmpl'
    }
  }
});

require(

  [
    'model',
    'view',
    'controller',
    'jquery',
    'tmpl',
  ],

  function (model, view, controller, tmpl, $) {
    console.log('$', $);
    console.log('model', model);
    console.log('view', view);
    console.log('controller', controller);
    model.sayHelloM();
    view.sayHelloV();
    controller.sayHelloC();
  }
);
