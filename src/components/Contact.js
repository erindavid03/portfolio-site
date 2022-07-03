import React from 'react';

function Contact() {
    // store the contact greetings here
    const contactGreeting = ['Psst!! Wanna work together? ', "Interested in creating cool stuff together?", "Like my work? (●'◡'●) Send a telegram!", 
    "Got any questions? Send me a telegram!", "Like my stuff? Send a telegram!", "Wanna be friends? Send me a telegram! :)", "Wanna work together? Send a telegram :D", "Lets chat! Send me a telegram!",
    "Wanna make cool wizard magic together? (∩^o^)⊃━☆", "Got any questions? Send a telegram! its free!!"];
    // store button text here
    const buttonText = ['Send a Telegram', 'Send an Owl'];


    // randomize the contact greetings here!
    let randomGreetingIndex = (Math.floor(Math.random() * contactGreeting.length));


  return (
    <section id="contact">
        <h2>{contactGreeting[randomGreetingIndex]}</h2>
        <a href="mailto:erindavid001@email.com">{ randomGreetingIndex == 8 ? buttonText[1] : buttonText[0] }</a>
    </section>
  )
}

export default Contact