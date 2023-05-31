// function sendEmail() {
//   let idSubject = "";
//   let idEmail = "";
//   let idMessage = "";

//   idSubject = document.getElementById("subject").value;
//   idEmail = document.getElementById("email").value;
//   idMessage = document.getElementById("message").value;

//   Email.send({
//     SecureToken: "6426a8a63b756bd858b7d23072673e71",
//     To: "developerjosiel@gmail.com",
//     From: idEmail,
//     Subject: idSubject,
//     Body: "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>",
//   }).then((message) => alert(message));
// }
// Body: `<div>${idMessage}</div>`,

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com:2525",
    Username: "developerjosiel@gmail.com",
    Password: "1F248F340C59376F67339A0BBB32A0C7865F",
    To: "developerjosiel@gmail.com",
    From: "sender@example.com",
    Subject: "Test Email",
    Body: "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>",
  }).then((message) => alert("mail sent successfully"));
}
