import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import profile from "../../images/profile-img.jpg";
import {
  Dns,
  DriveFolderUpload,
  EmailOutlined,
  FacebookOutlined,
  GitHub,
  HomeOutlined,
  InfoOutlined,
  Instagram,
  LinkedIn,
  School,
  Twitter,
} from "@mui/icons-material";

export const Homepage = () => {
  const linkStyles = {
    color: "white",
    textDecoration: "none",
    padding: "10px",
  };

  const iconStyles = {
    paddingRight: "10px",
    fontSize: "35px",
  };

  return (
    <Wrapper>
      <HeaderSection>
        <Profile>
          <ImageWrapper>
            <Img src={profile} alt="profile" />
          </ImageWrapper>
          <Name>Alfred Gitau</Name>
        </Profile>
        <Socials>
          <NavLink to="#" style={linkStyles}>
            <LinkedIn />
          </NavLink>
          <NavLink to="#" style={linkStyles}>
            <FacebookOutlined />
          </NavLink>
          <NavLink to="#" style={linkStyles}>
            <Instagram />
          </NavLink>
          <NavLink to="#" style={linkStyles}>
            <GitHub />
          </NavLink>
          <NavLink to="#" style={linkStyles}>
            <Twitter />
          </NavLink>
        </Socials>
        <Tabs>
          <NavLink to="home" style={linkStyles}>
            <HomeOutlined style={iconStyles} />
            Home
          </NavLink>
          <NavLink to="about" style={linkStyles}>
            <InfoOutlined style={iconStyles} />
            Profile
          </NavLink>
          <NavLink to="resume" style={linkStyles}>
            <School style={iconStyles} />
            Resume
          </NavLink>
          <NavLink to="#" style={linkStyles}>
            <DriveFolderUpload style={iconStyles} />
            PortFolio
          </NavLink>
          <NavLink to="#" style={linkStyles}>
            <Dns style={iconStyles} />
            Services
          </NavLink>
          <NavLink to="contact" style={linkStyles}>
            <EmailOutlined style={iconStyles} />
            Contact
          </NavLink>
        </Tabs>
      </HeaderSection>
      <MainSection>
        <Outlet />
      </MainSection>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
`;
const HeaderSection = styled.section`
  width: 20%;
  height: 100vh;
  background-color: rgb(4, 11, 20);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainSection = styled.section`
  width: 80%;
  height: 100vh;
`;
const Profile = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;
const ImageWrapper = styled.div`
  width: 160px;
  height: 160px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;
const Name = styled.p`
  font-size: 25px;
  color: white;
  text-align: center;
  font-weight: bold;
`;
const Socials = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 20px;
`;
