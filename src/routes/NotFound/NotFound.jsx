import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h3>Page not found</h3>
      <p>
        The page or information you're looking for is not available here or has
        been moved
      </p>
      <Button onClick={() => navigate("/")}>Go to homepage</Button>
    </Wrapper>
  );
};

export const Button = styled.button`
  background-color: white;
  color: black;
  padding: 7px;
  border: 1px solid black;
  width: 160px;
  border-radius: 5px;
  &:hover {
    background-color: rgb(4, 11, 20);
    color: white;
  }
`;

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
