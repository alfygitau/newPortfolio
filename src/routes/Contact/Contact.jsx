import { AddIcCall, AlternateEmail, ShareLocation } from "@mui/icons-material";
import styled from "styled-components";
import { Button } from "../NotFound/NotFound";

export const Contact = () => {
  return (
    <Wrapper>
      <Content>
        A currently seeking a job as a freelance developer, full time develeoper
        and part-time developer preferably in the remote environment. I am open
        to learning new skills as well as learn from my new peers.
      </Content>
      <Section>
        <Location>
          <DescriptionList>
            <DescriptionTitle>
              <ShareLocation /> &nbsp; Location
            </DescriptionTitle>
            <DescriptionData>Section 58 Nakuru, Kenya</DescriptionData>
            <DescriptionTitle>
              <AlternateEmail /> &nbsp; Email
            </DescriptionTitle>
            <DescriptionData>
              alfygitau@gmail.com & fredkaris1992@gmail.com
            </DescriptionData>
            <DescriptionTitle>
              <AddIcCall /> &nbsp; Call
            </DescriptionTitle>
            <DescriptionData>+254 769 404436 & 0707406206</DescriptionData>
          </DescriptionList>
        </Location>
        <ContactForm>
          <Form>
            <NameWrapper>
              <Name>
                <Label>Name</Label>
                <Input type="text" placeholder="Enter your name" name="name" />
              </Name>
              <Email>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                />
              </Email>
            </NameWrapper>
            <Label>Subject</Label>
            <Input type="email" placeholder="Enter your email" name="email" />
            <Label>Message</Label>
            <TeaxtArea />
            <Button>Send Message</Button>
          </Form>
        </ContactForm>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 95%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;
`;
const Section = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 2em;
`;
const Location = styled.div`
  width: 35%;
  border: 0.5px solid black;
  margin-bottom: 20px;
  padding: 10px;
`;
const ContactForm = styled.div`
  width: 60%;
  border: 0.5px solid black;
  margin-bottom: 20px;
  padding: 10px;
`;
const Content = styled.p``;
const DescriptionList = styled.dl`
  padding: 20px;
`;
const DescriptionTitle = styled.dt`
  /* padding-bottom: 10px; */
`;
const DescriptionData = styled.dd`
  padding-bottom: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
`;
const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
`;
const Input = styled.input`
  padding: 8px;
`;
const Label = styled.label``;
const TeaxtArea = styled.textarea`
  height: 80px;
  margin-bottom: 10px;
`;
const Name = styled.div`
  display: flex;
  flex-direction: column;
`;
const Email = styled.div`
  display: flex;
  flex-direction: column;
`;
