import styled from "styled-components";
import Typical from "react-typical";
import homebackground from "../../images/home.jpeg";
import cv from "../../assets/alfyCV.doc";

export const Home = () => {
  return (
    <>
      <Wrapper>
        <Section>
          <Title>Alfred Gitau</Title>
          <Paragraph>
            I'm a{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Typescript-Developer",
                2500,
                "Javascript-Developer",
                2500,
                "React-Developer",
                2500,
              ]}
            />
          </Paragraph>
          <Download href={cv} download>
            Download Cv
          </Download>
        </Section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${homebackground});
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Paragraph = styled.p`
  color: white;
  font-size: 40px;
`;
const Title = styled.p`
  color: white;
  font-size: 50px;
  font-weight: bold;
`;
const Download = styled.a`
  color: black;
  background-color: white;
  padding: 7px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    background-color: rgb(4, 11, 20);
    color: white;
  }
  &:visited {
    text-decoration: none;
  }
`;
