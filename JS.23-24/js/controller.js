define(

  'controller',

  ['model', 'view'],

  function (model, view) {

      return {


      sayHelloC: function () {
      console.log('Hello, Controller');
    },

    // view.elements.addBtn.on('click', addItem);
    // view.elements.listContainer.on('click', '.item-delete', removeItem);
    //
    // function addItem() {
    //   var newItem = view.elements.input.val();
    //
    //   model.addItem(newItem);
    //   view.renderList(model.data);
    //   view.elements.input.val(' ');
    // }
    //
    // function removeItem() {
    //   var item = $(this).attr('data-value');
    //
    //   model.removeItem(item);
    //   view.renderList(model.data);
    // }

  };
}



  // $(function () {
  //   var firstToDoList = ['1', '2', '3'];
  //   var model = new Model(firstToDoList);
  //   var view = new View(model);
  //   var controller = new Controller(model, view);
  // })
);
