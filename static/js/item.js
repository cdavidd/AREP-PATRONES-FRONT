var itemModule = (function() {
  var addItem = function() {
    var id = $("#id").val();
    var name = $("#name").val();
    var cantidad = $("#cantidad").val();
    var item = { id: id, name: name, cantidad: cantidad };
    apiItem.addItem(JSON.stringify(item));
  };
  return {
    addItem: addItem
  };
})();
