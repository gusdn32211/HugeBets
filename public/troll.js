function test() {
  var data = { email: "dragonboatfelist@gmail.com", password: "felist123" }
  var saveData = $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "https://hughbets.herokuapp.com/alext",
    data: JSON.stringify(data),
    // dataType: "text",
    success: function(resultData) { console.log(resultData) }
  });
}