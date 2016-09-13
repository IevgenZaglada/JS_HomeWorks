requirejs.config({
    paths: {
        'jquery': 'jquery',
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
        'tmpl'
    ],

    // invoked function after all modules were loaded. This is an application start point
    function (model, view, controller, tmpl, $) {
        var firstToDoList = ['learn JS', 'learn C#', 'become a programmer'];
        model.init(firstToDoList);
        view.init();
        controller.init(view);
    }
);


// https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery
