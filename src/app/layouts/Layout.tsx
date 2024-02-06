import React, {useContext} from "react";
import {Sidebar} from "../../widgets/Sidebar";
import {Container} from "@mui/material";
import {Outlet} from "react-router-dom";
import {AuthContext} from "../providers/AuthContext";
import {PageLoader} from "../../widgets/PageLoader";

export const Layout = () => {
  const {isLoading} = useContext(AuthContext)

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        // TODO: Move this #F3F3F3 color into light.palette.background.default
        backgroundColor: '#F3F3F3',
        minHeight: '100vh',
        display: 'flex'
      }}
    >
      <Sidebar/>
      {isLoading ? <PageLoader/> : <Outlet/>}
    </Container>
  )
}