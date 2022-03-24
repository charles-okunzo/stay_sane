function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com:2525",
    Username: "alvin47k@gmail.com",
    Password: "EA1C8D6409B83A4E4395CD18AA31632ABCA2",
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
