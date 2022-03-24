function sendEmail() {
  Email.send({
    Host: "smtp.mailtrap.io",
    Username: "9fc97996d9ad7f",
    Password: "f7080bbbd0a397",
    To: 'alvin47k@gmail.com',
    From: document.getElementById("email").value,
    Subject: "CONTACT US FORM INQUIRY",
    Body: "Name: " + document.getElementById("name").value
    + "<br>Name: " + document.getElementById("email").value
    + "<br>Name: " + document.getElementById("phone").value
    + "<br>Name: " + document.getElementById("message").value
  }).then(
      (message) => alert("Message Sent Succesfully"));
}
