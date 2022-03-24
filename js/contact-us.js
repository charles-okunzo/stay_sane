function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "alvin47k@gmail.com",
    Password: "MAZARATI111",
    To: 'alvin.kenyagah@student.moringaschool.com',
    From: document.getElementById("email").value,
    Subject: "CONTACT US FORM INQUIRY",
    Body: "Name: " + document.getElementById("name").value
    + "<br>Name: " + document.getElementById("email").value
    + "<br>Name: " + document.getElementById("phone").value
    + "<br>Name: " + document.getElementById("message").value
  }).then(
      (message) => alert("Message Sent Succesfully"));
}
