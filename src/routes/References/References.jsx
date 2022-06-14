import Carousel from "react-multi-carousel";
import styled from "styled-components";

export const References = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper>
      <Page>
        <h3>References</h3>
      </Page>
      <Section>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
        >
          <div>
            <Card>
              <ImageWrapper>
                <Image src="https://avatars.githubusercontent.com/u/32747409?v=4" />
              </ImageWrapper>
              <Name>
                <strong>Name: </strong>George Ndung'u
              </Name>
              <Title>
                Senior Front-End Engineer @ PoweredByPeople, Nairobi
              </Title>
              <Email>gitaubd@gmail.com</Email>
              <Tel>Tel: 0741790736</Tel>
            </Card>
          </div>
          <div>
            <Card>
              <ImageWrapper>
                <Image src="https://avatars.githubusercontent.com/u/11762046?v=4" />
              </ImageWrapper>
              <Name>
                <strong>Name: </strong>Anthony Kimani
              </Name>
              <Title>
                Senior Back-End Engineer @ ICT LIFE, Ideas Brought to Life,
                Nairobi
              </Title>
              <Email>tonykimani@gmail.com</Email>
              <Tel>Tel: 0712966136</Tel>
            </Card>
          </div>
          <div>
            <Card>
              <ImageWrapper>
                <Image src="https://avatars.githubusercontent.com/u/26279422?v=4" />
              </ImageWrapper>
              <Name>
                <strong>Name: </strong>Kaleb Kiprotich
              </Name>
              <Title>
                Senior Front-End Engineer @ ICT LIFE, Ideas Brought to Life,
                Nairobi
              </Title>
              <Email>kalebkip@gmail.com</Email>
              <Tel>Tel: 0707406206</Tel>
            </Card>
          </div>
        </Carousel>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const Section = styled.div`
  width: 90%;
  height: 100vh;
  margin: auto;
  height: 400px;
  margin-top: 20px;
  gap: 1.5em;
  border: 1px solid rgb(235, 235, 235);
  /* border-radius: 5px; */
`;
const Card = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
`;
const Name = styled.h5`
  padding: 5px;
`;
const Title = styled.p`
  padding: 5px;
  font-style: italic;
`;
const Email = styled.p`
  padding: 5px;
`;
const Tel = styled.p`
  padding: 5px;
`;
const Page = styled.div`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
const ImageWrapper = styled.div`
  border-radius: 50%;
  border: 1px solid black;
  width: 100px;
  height: 100px;
  margin-left: 40px;
`;
