import { Progress } from "rsuite";
import styled from "styled-components";

export const About = () => {
  return (
    <Wrapper>
      <Summary>
        <h3>Profile Summary</h3>
        <Content>
          Knowledgeable Front End Developer adept at creating successful
          websites that meet customer needs. Specializing in collaborating with
          all customers to gather requirements, produce plans and improve
          designs for usability and functionality. Fully proficient in
          JavaScript and TypeScript and frameworks including React, Next,
          vanilla javascript.
        </Content>
      </Summary>
      <PersonalInformation>
        <h3>Personal Information</h3>
        <Content>
          The best way to achieve success in programming is by losing the fear
          of failing
        </Content>
        <Info>
          <Section>
            <UnList>
              <List>
                <strong>Birthday: </strong>
                <span>06/06/1992</span>
              </List>
              <List>
                <strong>Website: </strong>
                <span>https://shoppit-eight.vercel.app/</span>
              </List>
              <List>
                <strong>Phone: </strong>
                <span>+254769404436</span> &nbsp;& &nbsp;
                <span>+254707406206</span>
              </List>
              <List>
                <strong>City: </strong>
                <span>Nairobi Kenya</span>
              </List>
            </UnList>
          </Section>
          <Section>
            <UnList>
              <List>
                <strong>Age: </strong>
                <span>30 Years</span>
              </List>
              <List>
                <strong>Degree: </strong>
                <span>Bachelor of Science, Computer Science</span>
              </List>
              <List>
                <strong>Email: </strong>
                <span>alfygitau@gmail.com</span> &nbsp;& &nbsp;
                <span>fredkaris1992@gmail.com</span>
              </List>
              <List>
                <strong>Freelance: </strong>
                <span>Available</span>
              </List>
            </UnList>
          </Section>
        </Info>
        <h4>What you need to know about me</h4>
        <Content>
          <UnList>
            <List>5+ years of experience building frontend applications</List>
            <List>
              Strong knowledge of React and its ecosystem. Understanding of how
              it differs from another libraries
            </List>
            <List>
              Strong knowledge of Typescript (discriminated unions and generics
              are not an empty phrases for me) and at least 2 year of using it.
            </List>
            <List>
              Experience using testing library (Jasmine/Jest, React Testing
              Library/Enzyme) and good understanding of how to write unit tests
            </List>
            <List>
              Very good understanding of frontend development lifecycle (design,
              architecture, building bundles, deploying, error tracking,
              performance monitoring, etc)
            </List>
          </UnList>
        </Content>
      </PersonalInformation>
      <Skills>
        <h3>Skills</h3>
        <Content>
          I am passionate about quality and reliability. Here is a rich network
          of skills that i possess
        </Content>
        <Info>
          <Section>
            <p>JavaScript</p>
            <Progress.Line percent={90} status="success" />
            <p>TypeScript</p>
            <Progress.Line percent={90} status="success" />
            <p>React and its ecosystem</p>
            <Progress.Line percent={90} status="success" />
            <p>Next JS, SSR and pre-rendering</p>
            <Progress.Line percent={90} status="success" />
          </Section>
          <Section>
            <p>Redux/ReactQuery/mobX/useAxios</p>
            <Progress.Line percent={90} status="success" />
            <p>Redux Tool Kit (RTK)/RTK Query</p>
            <Progress.Line percent={90} status="success" />
            <p>HTML 5</p>
            <Progress.Line percent={90} status="success" />
            <p>CSS 3 & Pre-Processors/SAAS/LESS/styled-components</p>
            <Progress.Line percent={90} status="success" />
          </Section>
        </Info>
      </Skills>
      <Facts></Facts>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 95%;
  height: fit-content;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  /* border: 1px solid black; */
`;
const Summary = styled.div``;
const Content = styled.p`
  padding-bottom: 10px;
`;
const Info = styled.div`
  width: 100%;
  display: flex;
`;
const Section = styled.section`
  width: 50%;
`;

const UnList = styled.ul`
  padding: 10px;
  list-style-type: none;
`;

const List = styled.li`
  padding: 7px;
`;

const PersonalInformation = styled.div``;
const Skills = styled.div``;
const Facts = styled.div``;
