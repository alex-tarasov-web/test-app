import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Layout} from "../../../layouts/Layout";
import {NotFoundPage} from "../../../../pages/NotFoundPage";
import {UsersPage} from "../../../../pages/UsersPage";
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <Routes>
      {/*<Route path='login'/>*/}

      <Route path='/' element={<Layout/>}>
        <Route path='dashboard' element={<ProtectedRoute/>}>
          <Route path="users" element={<UsersPage/>}/>
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default AppRouter;