function Send_Email(){
    var Name = document.getElementById("Name").value;
    var Email_Adress = document.getElementById("Email_Adress").value;
    var Message = document.getElementById("Message").value;
    Email.send({
        Host: "smtp.mailgun.org",
        Username: "gabitodirs@gmail.com",
        Password: "rjweubexnbluybuo",
        To: "'" + Email_Adress + "'",
        From: "gabitodirs@gmail.com",
        Subject: "Thanks For Your Contact",
        Body: "Thank You For Your Question, It Was Sent To Me And I Am Going To Answare It As Quick As Possible, The Answare Will Arrive At Your Email Soon. Wish You Everything Good. Bye"
    })
    var Message_Email = "Name: " + Name + "<br>Message: " + Message
    Email.send({
        Host: "smtp.mailgun.org",
        Username: "gabitodirs@gmail.com",
        Password: "rjweubexnbluybuo",
        To: "gabitodirs@gmail.com",
        From: "gabitodirs@gmail.com",
        Subject: "Message",
        Body: Message_Email
    })
    document.getElementById("Name").value = ""
    document.getElementById("Email_Adress").value = ""
    document.getElementById("Message").value = ""
}
