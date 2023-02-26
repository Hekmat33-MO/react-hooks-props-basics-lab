import React from "react";
import Links from "./Links";
import user from "../data/user";

function About() {
    return ( <
        div id = "about" >
        <
        h2 > About Me < /h2> <
        p > Put the bio in here < /p>  {
            bio ? < p > { bio } < /p> : ""} <
                img src = "https://i.imgur.com/mV8PQxj.gif"
            alt = "I made this" / > { /* add your <Links /> component here */ } <
                Links linkedin = { user.links.linkedin }
            github = { user.links.github }
            />

            <
            /div>
        );
    }

    export default About;