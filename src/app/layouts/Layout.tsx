import React, {useContext} from "react";
import {Sidebar} from "../../widgets/Sidebar";
import {Container} from "@mui/material";
import {Outlet} from "react-router-dom";
import {AuthContext} from "../providers/AuthContext";
import {PageLoader} from "../../widgets/PageLoader";

export const Layout = () => {
  const {isLoading} = useContext(AuthContext)
  console.log('isLoading', isLoading)
  return (
    <Container maxWidth={false} disableGutters sx={{minHeight: '100vh'}}>
      <Sidebar/>
      {isLoading ? <PageLoader/> : <Outlet/>}
    </Container>
  )
}