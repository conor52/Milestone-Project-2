function sendMail(newsletter) {
	emailjs.send("gmail", "esports_symposium_newsletter", {
		"from_email": newsletter.emailaddress.value
	})
	return false; // To block from loading a new page
}
// The code used to send a newsletter email through email.js. the first argument is the service ID, ie, the system that the email will be sent through. The second is my specific template that I made on emailjs.com.
// The first paramater is my own email address that comes from the form I made in my template