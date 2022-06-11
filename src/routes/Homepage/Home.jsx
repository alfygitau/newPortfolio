import styled from "styled-components";
import Typical from "react-typical";
import homebackground from "../../images/hero-bg.jpg";
import { Button } from "../NotFound/NotFound";

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
          <Button>Download CV</Button>
        </Section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${homebackground});
  background-size: cover;
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
