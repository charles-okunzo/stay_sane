function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "alvin.kenyagah@student.moringaschool.com",
    Password: "MAZARATI111",
    To: 'alvin47k@gmail.com',
    From: document.getElementById("email").value,
    Subject: "CONTACT US FORM INQUIRY",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
