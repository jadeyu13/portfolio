import { useState } from 'react';
import { projectItems } from '../components/data/projectItems.jsx';
import { FaGithub, FaVideo } from 'react-icons/fa';

function Projects() {
  //eslint-disable-next-line
  const [cards, setCards] = useState(projectItems);
  return (
    <>
      <section className="projects">
        <h1>Projects</h1>

        <div className="cards">
          {cards.map(({ id, title, desc, github, demo, image }) => (
            <article key={id}>
              <img src={image} alt={title} />
              <h4>{title}</h4>
              <p>{desc}</p>
              <ul>
                <li>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github"
                  >
                    <FaGithub style={{ marginRight: 6 }} />
                    github
                  </a>
                </li>
                <li>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopenner noreferrer"
                    className="demo"
                  >
                    <FaVideo style={{ marginRight: 6 }} />
                    Demo
                  </a>
                </li>
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
