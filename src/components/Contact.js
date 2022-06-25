import React from 'react';

function Contact() {
    // store the contact greetings here
    const contactGreeting = ['Psst!! Wanna work together? Send me a telegram :) ', "Interested in creating cool stuff together? Shoot me a telegram !", "Like my work? (●'◡'●) Send a telegram!", 
    "Got any questions? Send me a telegram!", "Like my stuff? Send a telegram!", "Wanna be friends? (❁´◡`❁) Send me a telegram!", "Wanna work together? Send a telegram :D I wont bite!", "Lets chat! Send me a telegram!",
    "Wanna make cool wizard magic together? Send me an owl (∩^o^)⊃━☆", "Got any questions? Send a telegram! its free!!"];
    // store button text here
    const buttonText = ['Send a Telegram', 'Send and Owl'];


    // randomize the contact greetings here!
    let randomGreetingIndex = (Math.floor(Math.random() * contactGreeting.length));

    console.log(randomGreetingIndex);
    console.log(contactGreeting);


  return (
    <div id="contact">
        <h2>{contactGreeting[randomGreetingIndex]}</h2>
        <a href="mailto:erindavid001@email.com">{ randomGreetingIndex == 8 ? buttonText[1] : buttonText[0] }</a>
    </div>
  )
}

export default Contact