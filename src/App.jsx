import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./app.scss";
import { Navbar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Hero } from "./components/hero/Hero";
import { Parallax } from "./components/parallax/Parallax";
import { Services } from "./components/services/Services";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";
import { Cursor } from "./components/cursor/Cursor";


function App() {
  return (
    <div>
      <Cursor/>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="Services" >
        <Parallax type="services"/>
      </section>

      <section>
        <Services/>
      </section>

      <section id="Portfolio">
        <Parallax type="portfolio"/>
      </section>

      <section>
        <Portfolio/>
      </section>

{/* this is all because of the mess of contact us */}
{/* need to review the code */}

{/* ------------------------------------- */}
      <section>
        <div></div>
      </section>
      <section>
        <div></div>
      </section>
      {/* <section>
        <div></div>
      </section> */}
{/* ------------------------------------- */}
      
      <section id="Contact">
        <Contact/>
      </section>


      
    </div>
  );
}

export default App;
