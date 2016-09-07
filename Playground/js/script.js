var list = {
  value: 0,
  next: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null
      }
    }
  }
};

function printList(list) {

  var temp = list;

  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }

}
printList(list);
