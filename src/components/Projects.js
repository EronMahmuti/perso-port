import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/Portfolio/project-img12.jpg';
import projImg2 from '../assets/img/Portfolio/project-img13.jpg';
import projImg3 from '../assets/img/Portfolio/project-img14.jpg';
import projImg4 from '../assets/img/Portfolio/project-img15.png';
import projImg5 from '../assets/img/Portfolio/project-img16.jpg';
import projImg6 from '../assets/img/Portfolio/project-img17.jpg';
import projImg7 from '../assets/img/Portfolio/project-img18.png';
import projImg8 from '../assets/img/Portfolio/project-img19.png';
import projImg9 from '../assets/img/Portfolio/project-img20.jpg';
import projImg10 from '../assets/img/Portfolio/project-img24.jpg';
import projImg11 from '../assets/img/Portfolio/project-img22.jpg';
import projImg12 from '../assets/img/Portfolio/project-img23.jpg';
import projImg13 from '../assets/img/Portfolio/project-img24.jpg';
import projImg14 from '../assets/img/Portfolio/project-img25.jpg';
import projImg15 from '../assets/img/Portfolio/project-img26.jpg';
import projImg16 from '../assets/img/Portfolio/project-img27.jpg';
import projImg17 from '../assets/img/Portfolio/project-img28.jpg';
import projImg18 from '../assets/img/Portfolio/project-img29.jpg';
import logo1 from '../assets/img/Portfolio/logo-1.png';
import logo2 from '../assets/img/Portfolio/logo-2.png';
import logo3 from '../assets/img/Portfolio/logo-3.png';
// import projImg13 from '../assets/img/Portfolio/project-img24.jpg';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Business Design',
      description: 'Design & Illustration',
      imgUrl: projImg1,
    },
    {
      title: 'Business Design',
      description: 'Design & Illustration',
      imgUrl: projImg2,
    },
    {
      title: 'Business Design',
      description: 'Design & Illustration',
      imgUrl: projImg3,
    },
    {
      title: 'Business Design',
      description: 'Design & Illustration',
      imgUrl: projImg4,
    },
    {
      title: 'Business Design',
      description: 'Design & Illustration',
      imgUrl: projImg5,
    },
    {
      title: 'Business Design',
      description: 'Design & Illustration',
      imgUrl: projImg6,
    },
    {
      title: 'Business Design',
      description: 'Design & Illustration',
      imgUrl: projImg7,
    },
    {
      title: 'Business Design',
      description: 'Design & Illustration',
      imgUrl: projImg8,
    },
    {
      title: 'Business Design',
      description: 'Design & Illustration',
      imgUrl: projImg9,
    },
    {
      title: 'Business Design',
      description: 'Design & Illustration',
      imgUrl: projImg17,
    },
  ];

  const projectsTabTwo = [
    {
      title: 'Product Design',
      description: 'Design & Social Media',
      imgUrl: projImg10,
    },
    {
      title: 'Product Design',
      description: 'Design & Social Media',
      imgUrl: projImg11,
    },
    {
      title: 'Product Design',
      description: 'Design & Social Media',
      imgUrl: projImg12,
    },
    {
      title: 'Product Design',
      description: 'Design & Social Media',
      imgUrl: projImg16,
    },
    {
      title: 'Product Design',
      description: 'Design & Social Media',
      imgUrl: projImg14,
    },
    {
      title: 'Product Design',
      description: 'Design & Social Media',
      imgUrl: projImg15,
    },
    {
      title: 'Product Design',
      description: 'Design & Social Media',
      imgUrl: projImg18,
    },
  ];

  const projectsTabThree = [
    // {
    //   title: 'Personal Logo',
    //   description: 'Design & Development555',
    //   imgUrl: logo1,
    // },
    // {
    //   title: 'Personal Logo',
    //   description: 'Design & Development555',
    //   imgUrl: logo2,
    // },
    {
      title: 'Personal Logo',
      description: 'Design & Branding',
      imgUrl: logo3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? 'animate__animated animate__fadeIn'
                      : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I use a variety of tools and techniques, such as
                    drawing and prototyping to bring your ideas to
                    life. I am passionate about design and always
                    looking for new ways to push the boundaries and
                    create beautiful, effective designs.
                  </p>
                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="first"
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Illustrations
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Social Media
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Logo</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? 'animate__animated animate__slideInUp'
                          : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTabTwo.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsTabThree.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
