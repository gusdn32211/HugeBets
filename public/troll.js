function test(id, email, password) {
  var email = prompt("Enter your investopia email");
  var password = prompt("Enter your password");
  var data = { email: email, password: password }
  var saveData = $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "https://hughbets.herokuapp.com/" + id,
    data: JSON.stringify(data),
    success: function(resultData) { alert("Wise Word From " + id + ": " + resultData) }
  });
}