import React from "react";
import Container from "../ui/Container";
import { Outlet } from "react-router-dom";

const PageLayout = ({ isImageFull }) => {
  return (
    <>
      <Container isImageFull={isImageFull}>
        <Outlet />
      </Container>
    </>
  );
};

export default PageLayout;
