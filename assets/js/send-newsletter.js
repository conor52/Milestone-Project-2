






function sendMail(newsletter) {
    emailjs.send("gmail", "esports_symposium_newsletter", {
        "from_email": newsletter.emailaddress.value
      
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}


