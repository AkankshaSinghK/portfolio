/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Aroma Hub-eCommerce Platform",
    description:
      "AROMA HUB, a sophisticated eCommerce platform for exquisite perfumes, using MERN (MongoDB, Express.js, React.js, Node.js) stack.",
    url: "https://aroma-hub.onrender.com/",
  },
  {
    title: "Spotify Clone",
    description:
      "Developed a Spotify Clone using MERN Stack with core functionalities like Authentication, Player Controls, Playlist Creation and Search functionality.",
    url: "http://prod-spotify-clone.onrender.com/",
  },
  {
    title: "My Portfolio",
    description:
      "A portfolio to showcase my skills achievements and know more about me.",
    url: "https://my-portfolio-client-wheat.vercel.app/",
  },
  {
    title: "Multi Step Form",
    description:
      "Responsive multi-step form challenge with dynamic validation, smooth transitions, and a modern, mobile-friendly UI, built with HTML, CSS, and JavaScript for Frontend Mentor.",
    url: "https://multi-step-form-green-ten.vercel.app/",
  },
  {
    title: "Survey App",
    description:
      "A React.js Survey App with a dynamic questionnaire, question navigation, answer storage, session tracking, and completion confirmation, ending with a thank you screen.",
    url: "https://survey-app-nu-six.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
