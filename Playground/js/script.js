var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {

  console.log(list.value);

if (list.next) {
  printReverseList(list.next);
}


}

printReverseList(list);
