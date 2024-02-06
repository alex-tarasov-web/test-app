import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Layout} from "../../../layouts/Layout";
import {NotFoundPage} from "../../../../pages/NotFoundPage";
import {UsersPage} from "../../../../pages/UsersPage";
import ProtectedRoute from "./ProtectedRoute";
import {TripsPage} from "../../../../pages/TripsPage";
import {DealsPage} from "../../../../pages/DealsPage";
import {TeamsPage} from "../../../../pages/TeamsPage";
import {AnalyticsPage} from "../../../../pages/AnalyticsPage";

function AppRouter() {
  return (
    <Routes>
      {/*<Route path='login'/>*/}

      <Route path='/' element={<Layout/>}>
        <Route path='dashboard' element={<ProtectedRoute/>}>
          <Route path="trips" element={<TripsPage/>}/>
          <Route path="deals" element={<DealsPage/>}/>
          <Route path="teams" element={<TeamsPage/>}/>
          <Route path="analytics" element={<AnalyticsPage/>}/>
          <Route path="users" element={<UsersPage/>}/>
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default AppRouter;