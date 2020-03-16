const apiUrl = "http://ec2-3-81-214-87.compute-1.amazonaws.com:8080/items";
apiItem = (function() {
  return {
    addItem: function(item) {
      $.ajax({
        url: apiUrl,
        type: "post",
        data: item,
        contentType: "application/json",
        success: function() {
          //location.href = apiUrl;
          alert("Item agregado");
        },
        error: function(XMLHttpRequest) {
          alert(
            "Error al registrar el item \n" +
              XMLHttpRequest.responseJSON.message
          );
        }
      });
    }
  };
})();
