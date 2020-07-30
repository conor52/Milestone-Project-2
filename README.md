# ***Esports Symposium***

Esports Symposium is a website dedicated to online competitive video games, called esports, for a video game called League of Legends. The specific part of the esport I am focusing on for League of Legends is the European League,
called the League European Championship, or the LEC for short.

The backbone of information collection for this League comes from an API called Pandascore. With the help of this API, the user will be able to check match schedules for the league and get basic player information that's
pulled from the API. It only has a maximum request limit of 1000 per hour, you will notice matches.html and players-to-watch.html, the API data load slower as it gets closer to this part and then not at all until an hour passes.
There is an unfortunate limitation of the API.

![Image of Caps and Perkz](https://github.com/conor52/Milestone-Project-2/blob/master/assets/images/perkz-and-caps.png)

# UX

Esports Symposium targets both people who are fans of the LEC but also might entice those who aren't really into it, this website aims to make them change their minds. I have a few user types below and how I would
imagine they'd experience this website.

**Narrative seeking user:** This person only cares about the overarching storylines that's happening in the LEC. They should already feel like they're at home when they see the striking cyan coloured text "Welcome to the hub of the LEC,
Find everything related to the League of Legends European Championship here". This will apply to my other user cases as well. Now that they have some reassurance, they might be enticed to look at the Players to Watch navigation link at the 
top of the screen. From here, there are 12 of the most interesting players in the league who all have a mini narration to them in a card.

**Unconvinced user:** They've seen the jumborton and they might still think "is this website for me?". Fortunately for them, they can just read the next striking thing on the page in cyan colour, "Why use Symposium?". That section goes into a bit
more depth of what this website is trying to achieve. They probably know the LEC somewhat, or else they wouldn't be on this website. Therefore, I added quotes further down the index from famous people in the industry who they must be
familiar with. Seeing industry experts who like this website should create a justified appeal to authority, i.e. the user will think it's good because a leading figure in the industry thinks this is a great website.

**Schedule seeking user:** Arguably the most common user type who will regularly visit your website and to be honest, I fall under this category too, this user quickly wants to see the schedule of the upcoming  games and will likely close the 
tab straight after. Maybe one day they will sign up for the newsletter, or check what else we have to offer. For now, it's clear what he has to do. The very first navigation link , excluding the title esports Symposium (which brings you back
to the index) and they will be right where they need to be. From here, they will see everything from the Day/time of the match, the scores between the teams (currently 0-0 as it's week one of the League) and the two teams playing.

**Event seeking user:** The user may have googled "World Championship Location" and came across this website, or is already a regular user. This user looking at this time of year will want to get the event locations so he/she can book flights and
accommodation for the event. They need only click on the navigation link "Esports Events" and from here they will see an interactive google map over South Korea where the Championship is being held. The location, Date and the accompanying  stage
of the Tournament can be found in the table below the map.

**Newsletter User:** This user simply wants to get all their information via a newsletter instead of relying on the website. They should have a very easy time doing this, as they can access this option in all of the footers and navbars on every single
html page. All they need to do is enter their email address and a confirmation email will be sent to them, declaring that it worked and they will receive weekly updates from now on.

# Features

### For all Pages

**Navbar:** The foundation for my website, the navbar has a contrasting black to the blue smoke background on the left and it perfectly blends in on the page further down the bar. The most visible element is of course the website name, which acts as a 
index/homepage button. I have my other navigation links here which will be underlined depending on what page the user is on to provide better UX as a way to highlight where they are on the website. Finally, I have a font awesome letter icon 
which acts as a modal link for a newsletter.

**Newsletter button:** This Button appears both in the navbar and footer and will trigger a pop up modal which will prompt the user to Enter their email address to sign up for a newsletter. Upon doing so, it will trigger embedded scripts on the
html page as well as the send-newsletter.js file to make a connection with the emailJS server to send a newsletter to the email address that the user entered. The newsletter also grows in size when it is hovered, providing a 
visible element of feedback on the users actions. This adds to a better UX.

**Jumbotron:** The jumbotrons purpose here is to call for extra attention on this page, it will immediately tell you what you need to know depending on the page you're on. It's particularly important on the index page, as I want something striking
to keep the user from immediately switching to a different website. The prominent yet simple colour scheme with an attractive Large text Jumbotron makes it so appealing to the user that they are less likely to leave the website.

**Footer:** Similar  to the Navbar, it also employs a left to right contrast of the blue smoke to an eventual fading together  into the body. Had there been requirements to reach 5 or more html pages, I definitely would've made the likes of the
Terms and conditions and the Privacy Policy to be actual pages in of themselves. I felt pretty good going 1 html page over the required 3 however. The footer also has a Newsletter button.

### Index 

**Why use Symposium:** While the Jumbotron will jump out at all users, for the unconvinced user, they may need a bit more persuasion. This section includes a short paragraph of text to reign them in as a regular user of the website.

**Quotes:** Another section dedicated to convince the user to use my website. As stated previously, the purpose of this section is to create a sort of appeal of authority to the user. If they seem someone they respect use this website and be 
very complimentary towards it, it should increase the likelihood of them revisiting the website.

Below are some Wireframes for index.html:

* [Desktop](https://ibb.co/6gFQ5bj)
* [Tablet](https://ibb.co/qkfVqKP)
* [Mobile](https://ibb.co/Km6vmJV)


### Matches

**Matches Table:** The bread and butter of the schedule seeking user, this is where you will find the schedule for the upcoming week of the LEC. The matchup in the center of the table as well as the League name (LEC) and the format (Best of 1)
is obtained from the matches.js file which pulls the data straight from the Pandascore API. I actually obtained most of the team logos from the API, however they remain static as I was unsure how to get them directly on from the Pandascore array
to the webpage like my other elements, It only appeared as a link. The time and date were also in the aforementioned array but they were in an ugly format. For example, I could only pull it up as "2020-06-11T22:00:00Z" for the first game. Due
to this, I decided it would look better if I made that information static.

**Loading spinner Icons:** Created simply using Font Awesome, this spinner icon can be found where I get information from the Pandascore API on the Matches and Players to Watch html pages. The icon serves the purpose of adding some interactivity 
to the user. When they see the icon, they will know that the information is on it's way.

Below are some Wireframes for matches.html:

* [Desktop](https://ibb.co/LzR4V57)
* [Tablet](https://ibb.co/ZB9FzrY)
* [Mobile](https://ibb.co/4jmXJN8)

### Players to Watch

**Player information cards:** For the narrative seeking user, I decided to display this information in this format as a way to display a personal image for each player alongside their narrative paragraph in this sleek design style. I made great
effort to make sure the images compliment the colour scheme here. While only the first line is pulled directly from the API, in the form of "player X is the position Y for the team Z", I have the entire paragraph generated from the
player-info.js page. Ideally I would have that static info come from the html page instead, unfortunately I couldn't find a way to do that without the first line overriding the paragraph. When I created a new paragraph below instead, it was 
too far separated from the first line pulled from the API and it looked quite poor on the website.

Below are some Wireframes for players-to-watch.html:

* [Desktop](https://ibb.co/Yk4kzX6)
* [Tablet](https://ibb.co/68PSZVh)
* [Mobile](https://ibb.co/kDGjvFC)

### Esports Events 

**Google map and table:** For the event seeking user, this is where they will find the location of both an interactive map from the Google Maps API and an accompanying  table. I made sure to have the starting coordinates hovering over asia and I put 
the Markers in the appropriate  spot on the map. Below there, there is static information about the world Championship such as it's location, the dates and the stage of the Tournament. I originally was going to pull some or all of this info from 
the API, sadly with the basic free plan this wasn't possible, I was given a 403 Forbidden error upon doing so.

Below are some Wireframes for esports-events.html:

* [Desktop](https://ibb.co/Jyqr1bJ)
* [Tablet](https://ibb.co/GQ2H2Yz)
* [Mobile](https://ibb.co/V3QbcBs)

## Features left to Implement 

**Accommodation/flight booking system:** As I was writing up this Readme, I realised in the event seeking user story case, that person would merely look at the map on the esports-events page, location and date and would then have to leave my website to go to another to 
book things like their flights, accommodation etc. It had me thinking, was there any way I could have implemented that on my website so they could spend more time on my website? If those ideas weren't feasible, perhaps I could have added an 
API that could get me Korean Laws on how to stay over there in accordance to the law, or a transport API to show you how to get from the airport to the venue. The possibilities  are endless here. I could have prompted this page up even further.

**Player stats:** Originally, I wanted the players to watch page to actually be a stat focused page instead of the narrative that I personally made. I had planned to do this with two other Free to use API's which had in game stats for the players
in the LEC. Unfortunately, I not only had to sign up for these API's, I also was required to contact them personally requesting for an API key. For whatever reason they never got back to me and I was forced to use pandascore API. Even with 
extensive searching, I couldn't find any other API's that were fit for purpose without paying a significant amount of money. Esports is a rather niche field in of itself and it was sad that I didn't have many options to make the website exactly 
as I intended. Instead, I decided to demonstrate effective use of an API on the players-to-watch page to show I understood the principal of what to do.

**A better Pandascore plan:** If I wanted to make this website commercially  viable outside of a simple demonstration for a project, I would have went with a better [plan](https://pandascore.co/pricing ) that would allow me a wider access of information,
such as tournament data and especially a  Live API as matches were going on. I wrongly assumed the free version of Pandascore included the Live API, I had originally designed my index page to incorporate it. One critical thing to note about the 
basic plan I have is that it only allows for 1000 per hour, you will even notice as it goes from 0 and gets closer to the limit, it will likely take longer to load, upward to maybe 15 seconds at times. Eventually, it wont load at all, you will
see and endless loading spinner icon and you can see an error message in the console saying max requests reached. A better plan would nearly entirely eliminate this problem. I hope to be judged as if I had a better plan, thus better loading speeds
upon refreshing the page.

# Technologies Used

* Html 5: The language used to present content on my website.

* Css: css is used for styling purposes and will make for a more attractive website.

* [Bootstrap:](https://getbootstrap.com/) Bootstrap is used primarily for it's Grid system which is particularly useful for styling the website for different view widths on different devices such as mobile and tablet. I also took advantage of some of it's prebuilt classes and 
components, such as Jumbotron and Modals.

* [Font Awesome:](https://fontawesome.com/) I imported and used the Lato, Roborto and Oswald texts throughout the website. I also obtained the spinner and mail icon from FontAwesome.

* [Hover.css:](https://ianlunn.github.io/Hover/) Used to add a layer of interactivity on the website, for example the mail Icon growing upon hovering over it.

* [EmailJs:](https://www.emailjs.com/) Provides an actual purpose to the modal, this API is used to send a customized newsletter to the email address that the user enters in the modal.

* [Google Maps:](https://developers.google.com/maps/documentation/javascript/overview) An map that provides an additional layer of interactivity for the user. Includes markers and clusters that point to the Stadium location.

* [Pandascore:](https://pandascore.co/) Easily the most important API of the bunch, it gave me extensive information on every single player, team and even general stats on playable characters in the game itself. It also includes other games which I had originally planned
on using.

* [JQuery:](https://jquery.com/) JQuery is a javascript Library that allows us to use a method as a shorthand way of writing many lines of javascript code.


# Testing 

**Narrative seeking user:**

1. Click on Players to Watch navigation link.
2. Scroll all the way down to the bottom of the page to assure everything loaded correctly in a fluid manner.
3. Repeat step 1 and 2 on different view widths and browsers, such as Opera and Firefox.

*Results:* Failure, The length of the cards, such as the player name location where the cyan text is, or the bottom of numerous cards, are off by a noticeable amount of pixels, which can vary depending on the view width.
I also originally didn't apply a font on the player names in the card, on firefox the default font in the browser was a fair bit uglier. I decided to apply a font on the css page, meaning all the font texts should look the same across
browsers. The black rectangle where the player name is was also noticeably  higher on the Alphari Card, that was fixed with the help of Kevin, the tutor, and the following line of css-

``` css
.alphari-img {
width:800px;
height: 400px;
}
````
This resolved my issue.

**Unconvinced user:**

1. Scroll down to the bottom of the index page , keeping an eye on the jumbotron, the why use Symposium section and the quotes.
2. Make sure all three appear as intended
3. Repeat step 1 and 2 on different  view widths and browsers.

*Results:* Success, but I noticed that I should make the why use Symposium section bigger on md screen widths.

**Schedule seeking user:**

1. Click on the matches navigation link. 
2. Make sure the middle right text in the table loads correctly, such as "MAD vs G2" and "LEC, Best of 1".
3. Repeat step 1 and 2 on different view widths and browsers. Make sure the table looks presentable in all of these instances.

*Results:* Success.

**Event seeking user:**

1. Click on the esports-events navigation link. 
2. Make sure the map loads correctly and that the table looks presentable.
3. Repeat step 1 and 2 on different view widths and browsers.

*Results*: Failure, for 2 reasons. First reason is, the map didn't load upon my first visit to the page. It required a refresh to get the map on screen. It was resolved by removing "&callback=initMap" 
from the script tag at the end of the body and instead changing the body tag to -

``` Html 
<body onload="initMap()"> </body>

````

There are also too many Table headings on smaller screen widths. I fixed the issue by removing the "Stage of Tournament" table heading, giving more space for the other elements on smaller view widths. Upon doing this, I noticed
that it resulted in giving me a double line on the stage of tournament cell, which was probably caused by the "d-none d-sm-block" bootstrap class, with the help of Kevin, the Tutor, I wrote the following line of css-

``` css
.table thead th {
border-bottom: none;
}
````

This fixed the styling issue, which seemed to me like a bug in Bootstrap.

**Newsletter user:**

1. Click on all mail icons in both the navigation and footer on index, matches, players-to-watch and esports-events html pages.
2. enter a valid email address (that you have access to) inside the email address form.
3. Click the Send newsletter button.
4. Go to your email account and check for mail titled "Esports Symposium Newsletter" (you may need to search by all mail or spam to see this message).
5. Repeat step 1-4 on different view widths and browsers.

*Results:* Failure, for two reasons. One reason is I simply forgot to add the modal code back onto my index.html page, therefore the button didn't work. I also had an issue where the email didn't actually send. Upon further investigation, 
I found under the email history section in EmailJS.com the following error "Gmail_API: Invalid grant. Please reconnect your Gmail account". The issue was resolved by doing just that, disconnecting and reconnecting my email on the website. All
issues are now resolved.


# Deployment

The deployment of this website is fairly straightforward. Esports Symposium was developed entirely on gitpod. I made numerous commits and pushes to github during the development of my project. There is no differences between the developed 
and deployed version of my website. I deployed my website through Github pages via settings in my repository, the deployed URL can be found [here](https://conor52.github.io/Conor-McCarthy-Milestone-Project-2/) while my Github repository is
found [here.](https://github.com/conor52/Conor-McCarthy-Milestone-Project-2)

# Credits 

## Content 

* Basic structure of the html and css for the cards in Players to Watch was obtained from a youtube tutorial, unfortunately I can't find this tutorial anymore sadly.

* As mentioned in the comments, the footer on all pages, the why use Symposium and quotes section were all borrowed from my last Milestone Project, with some minor adjustments.

* The code for my maps, send-newsletter, matches and player-info js files were partly obtained from carefully following the code institute lessons, particularly for the former two. For the later two, I required a lot of tutor assistance 
to get them the way I wanted to.

## Media

* I can credit all player images to the LEC, particularly their [twitter account.](https://twitter.com/LEC)

* The background I use on all my pages comes from [pexels.com](https://www.pexels.com/photo/blue-smoke-wallpaper-937980/)

* The team Logos are freely available from [Pandascore](https://pandascore.co/), however I had to make a connection to the API first and add a console.dir(data) in my function to get the image link.

* The quote images can be found in their twitter accounts profile photo, [MonteCristo](https://twitter.com/MonteCristo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor), [Froskurinn](https://twitter.com/Froskurinn) and [Ender](https://twitter.com/endercasts).

## Acknowledgements

* The inspiration for the colour scheme used in the website comes from number 12 on the list from [this website.](https://visme.co/blog/website-color-schemes/ )

* I got the idea to make the matches table the way I did from the [lolesports](https://lolesports.com/schedule?leagues=lec,european-masters,lcs,lck) schedule page.

* I'd also have to Acknowledge lolesports in general for making such a vibrant professional gaming scene in League of Legends.