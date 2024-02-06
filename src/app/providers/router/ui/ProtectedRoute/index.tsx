import {Outlet, RouteProps} from "react-router-dom";
import {AuthContext} from "../../../AuthContext/lib/AuthContext";
import {useContext} from "react";

type ProtectedRouteProps = RouteProps & {
  redirectPath?: string
  children?: JSX.Element
}

const ProtectedRoute = ({redirectPath = '/', children, ...props}: ProtectedRouteProps):JSX.Element  => {
  const {isSignedIn, isLoading} = useContext(AuthContext)

  // Commented out while authorization is missing
  // if (!isSignedIn && !isLoading) {
  //   return <Navigate to={redirectPath} replace/>;
  // }
  return children ? children : <Outlet/>
};


export default ProtectedRoute