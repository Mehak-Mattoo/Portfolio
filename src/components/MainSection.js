import React from 'react'
import me from "./images/mehak.jpg"
import linkedIn from "./images/linkedin.png"
import calculator from "./images/calculator.png"
import github from "./images/github.png"
import toDoList from "./images/to-do-list.png"
import netflix from "./images/netflix.png"
import password from "./images/password.png"
import tictactoe from "./images/icons8-tic-tac-toe-64.png"
import dictionary from "./images/icons8-dictionary-64.png"
import text from "./images/icons8-text-64.png"
import ScrollReveal from 'scrollreveal'
import chat from "./images/icons8-chat-64.png"
import pdf from "./images/Mehak_Mattoo_Resume.pdf"


export default function MainSection() {
//   let header = document.querySelector("header");
// header.classList.toggle("sticky", window.scrollY > 100);

//   let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("bx-x");
//   navbar.classList.toggle("active");
// };


const dropdown=()=>{

}


ScrollReveal({ distance: "80px", duration: 2000, delay: 200 });


ScrollReveal().reveal(".home-img, .contact form, .all-projects", {
  origin: "bottom",
});

ScrollReveal().reveal(" #edu-data, #Exp-data", {
  origin: "left",
});


  return (
    <>
    <header>
      <a href="#" class="logo">Mehak</a>
      <i id="menu-icon" class="bx bx-menu"></i>
      <nav class="navbar">
        <a href="#Home" class="active">Home</a>

        <a href="#projects">Projects</a>
        <a href="#Experience">Experience</a>
        <a href="#edu">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <section class="home" id="Home">
      <div class="home-content">
        <h4 class="heading">Hi! I am</h4>
        <h1 class="My-name"><span class="spell-name"> Mehak Mattoo </span></h1>

        <p id="mission">
          Looking for a role in the software development industry where I can
          grow, use my talents to provide value to the company, and eventually
          gain success.
        </p>

        <div class="social-links">
          <a
            href="https://www.linkedin.com/in/mehak-mattoo-124021229"
            target="_blank"
          >
            <img src={linkedIn} alt="linkedin icon" />
          </a>

          <a href="https://github.com/Mehak-Mattoo" target="_blank">
            <img src={github} alt="github icon" />
          </a>
        </div>
        <button>
          <a href= {pdf} target='_blank' >Download CV</a>
        </button>
      </div>
      <div class="home-img">
        <img src={me} alt="my image" />
      </div>
    </section>

    <section class="projects" id="projects">
      <h3 class="heading">Latest <span>Projects</span></h3>

      <div class="all-projects">
      

        <div class="project">
          <img
            id="project-imgs"
            src={chat}
            alt="project-icon"
          />
          <p>Chat application</p>
          <p id="project-text">
           A real- time chat application made using MERN stack
          </p>
          <a
            href="https://github.com/Mehak-Mattoo/chat-app"
            target="_blank"
          >
            <p id="visit">Visit</p></a
          >
        </div>

        <div class="project">
          <img
            id="project-imgs"
            src={toDoList}
            alt="project-icon"
          />
          <p>Note taking application</p>
          <p id="project-text"> Made using MERN stack to add, delete or edit your tasks seamlessly</p>
          <a href="https://github.com/Mehak-Mattoo/note-taking-site" target="_blank">
            <p id="visit">Visit</p>
          </a>
        </div>

        <div class="project">
          <img
            id="project-imgs"
            src={text}
            alt="project-icon"
          />
          <p>Text manipulative tool</p>
          <p id="project-text">
            A text manipulative tool to transform your text.
          </p>
          <a href="https://mehak-text-utils.netlify.app" target="_blank">
            <p id="visit">Visit</p></a
          >
        </div>

        <div class="project">
          <img
            id="project-imgs"
            src={dictionary}
            alt="project-icon"
          />
          <p>Dictionary</p>
          <p id="project-text">Find out meanings of millions of words</p>
          <a href="https://mehak-dictionary.netlify.app" target="_blank">
            <p id="visit">Visit</p>
          </a>
        </div>

        <div class="project">
          <img
            id="project-imgs"
            src={calculator}
            alt="project-icon"
          />
          <p>BMI calculator</p>
          <p id="project-text">
            Calculate your bmi to find out if you are actually healthy
          </p>

          <a href="https://mehak-bmi-calculator.netlify.app" target="_blank">
            <p id="visit">Visit</p>
          </a>
        </div>
        
      

        <div class="project">
          <img
            id="project-imgs"
            src={tictactoe}
            alt="project-icon"
          />
          <p>Tic-Tac-Toe</p>
          <p id="project-text">Have a little fun. Play tic-tac-toe!</p>
          <a href="https://mehak-tic-tac-toe.netlify.app" target="_blank">
            <p id="visit">Visit</p>
          </a>
        </div>
        <div class="project">
          <img id="project-imgs" src={password} alt="project-icon" />
          <p>Password generator</p>
          <p id="project-text">
            Generate random passwords with a single click for your inspiration
          </p>
          <a
            href="https://mehak-random-password-generator.netlify.app"
            target="_blank"
          >
            <p id="visit">Visit</p>
          </a>
        </div>
      </div>
    </section>


    <section id="Experience">
      <h3 class="heading">Experience</h3>
      <div id="Exp-data">
        <div id="main-heading">
          <p>Chegg |</p>
          <span>Subject Matter Expert</span>
        </div>

        <ul>
          <li>
            Resolve student doubts and offer easy solutions on a daily basis in
            biology subject
          </li>
          <li>
            Counted in the top solvers out of thousands of solvers various times
          </li>
        </ul>

        <div id="main-heading">
          <p>Growth Arrow |</p>
          <span>Equity Research Analyst</span>
        </div>

        <ul>
          <li>
            Exercised about different candlestick patterns, how to read charts
            and trading in the stock market
          </li>
          <li>
            Examined technical and fundamental analysis and various types of
            indicators and apply these knowledge to grow personal income
          </li>
        </ul>
      </div>
    </section>
    <section id="edu" class="Education">
      <h3 class="heading">Education</h3>
      <div id="edu-data">
      <div id="main-heading">
          <ul>
            <li>
              Full Stack Development Course |
              <span>DataTrained</span>
            </li>
          </ul>
        </div>
        <p id="content">Learned Java, HTML, CSS, JS</p>
        <div id="main-heading">
          <ul>
            <li>
            Bachelor with Honors in Zoology |
              <span>Deen Dayal Upadhyaya College (DU) </span>
            </li>
          </ul>
          </div>
        </div>
       
      <div id="edu-data">
        
        <p id="content">Secured 8.3 CGPA</p>

        <div id="main-heading">
          <ul>
            <li>Fundamentals of Digital Marketing | <span>Google</span></li>
          </ul>
        </div>

        <p id="content">
          Learned about SEO and SEM, email marketing, keyword planning, and much
          more from Google Digital Workshop
        </p>


      </div>
    </section>
    <section class="contact" id="contact">
      <h3 class="heading"><span>Contact</span> me!</h3>
      

   <p style={{fontSize:"2rem"}}> Phone: +91 7982146078</p>  
   
   <p style={{fontSize:"2rem ", lineHeight:"4"}}> Email: mehakmattoo7@gmail.com</p>  
    </section>
    </>
  )
}
