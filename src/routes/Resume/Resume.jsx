import styled from "styled-components";

export const Resume = () => {
  return (
    <Box>
      <Section>
        <h3>Education</h3>
        <UnList>
          <List>
            <Course>Bachelor Of Science, Computer Science</Course>
            <Year>2012-2016</Year>
            <Institution>University of Kabianga, Kericho Kenya</Institution>
            <Description>
              I studied BSC, Computer Science, specialized with front-end
              development with JavaScript and TypeScript.
            </Description>
          </List>
          <List>
            <Course>Javascript and its principles</Course>
            <Year>2016-2017</Year>
            <Institution>Atlas College of Professional Studies</Institution>
            <Description>
              I studied javaScript core framework React JS, then enrolled at
              freeCodeCamp and Udemy to study Next JS and Typescript.
            </Description>
          </List>
        </UnList>
        <h3>Professional Experience</h3>
        <UnList>
          <List>
            <Title>Frontend Engineer</Title>
            <Year>2020-Present</Year>
            <Institution>Graphine East Africa Limited (GEAL)</Institution>
            <h5>Roles and Responsibilities</h5>
            <Roles>
              <List>
                Teamed on user-centric design strategy in translation of UX and
                business requirements into coded solutions.
              </List>
              <List>
                Advocated for well-tested and documented, high quality code.
              </List>
              <List>
                Tested web-based product functionality and delivered iterations
                to customer.
              </List>
              <List>
                Collaborated with stakeholders during development processes to
                confirm creative proposals and design best practices.
              </List>
            </Roles>
          </List>
        </UnList>
      </Section>
      <Section>
        <UnList>
          <List>
            <Title>Frontend Developer Lead</Title>
            <Year>2020-2021</Year>
            <Institution>PoweredByPeople, Inc</Institution>
            <h5>Roles and Responsibilities</h5>
            <Roles>
              <List>
                Handling asynchronous requests, partial page updates and AJAX.
              </List>
              <List>
                Writing industry standard code that focuses on enhancing
                scalability and performance.
              </List>
              <List>Interacting with Git versioning control tools.</List>
              <List>
                Interacting with peers to build and manage an enterprise
                application.
              </List>
            </Roles>
          </List>
        </UnList>
        <UnList>
          <List>
            <Title>Software Developer</Title>
            <Year>2021-2022</Year>
            <Institution>ICT LIFE, IDEAS BROUGHT TO LIFE</Institution>
            <h5>Roles and Responsibilities</h5>
            <Roles>
              <List>
                Coded using HTML, CSS and JavaScript to develop features for
                both mobile and desktop platforms.
              </List>
              <List>
                Teamed on user-centric design strategy in translation of UX and
                business requirements into coded solutions.
              </List>
              <List>
                Tested web-based product functionality and delivered iterations
                to customer.
              </List>
              <List>
                Contributed to projects within Scrum project management
                environments.
              </List>
              <List>
                Followed SDLC best practices within Agile environment to produce
                rapid iterations for clients.
              </List>
            </Roles>
          </List>
        </UnList>
      </Section>
    </Box>
  );
};
const Box = styled.div`
  width: 95%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  margin-top: 20px;
`;
const Section = styled.div`
  width: 50%;
`;
const Course = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;
const Year = styled.p`
  background-color: rgb(228, 237, 249);
  width: fit-content;
  padding: 7px;
`;
const Institution = styled.p`
  font-style: italic;
  font-size: 18px;
`;
const Description = styled.p``;
const UnList = styled.ul``;
const List = styled.li`
  padding: 10px;
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;
const Roles = styled.ul``;
