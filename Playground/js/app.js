requirejs.config({
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    }
  }
});

require(
  [
    'module1',
    'jquery'
  ],
  function (module1) {
    console.log('$', $);
    console.log('module1', module1);
    module1.sayHello();
  }
);
