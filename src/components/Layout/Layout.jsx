import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const Layout = () => {
  return (
    <Main>
      <Outlet />
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  height: 100%;
`;
