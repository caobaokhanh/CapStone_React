import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserContext } from "./../../contexts/UserContext/UserContext";

export default function ProtectedRoute({ childern }) {
  const { currenUser } = useUserContext();
  const location = useLocation();
  console.log(location);

  if (!currenUser) {
    // User chưa đăng nhập => redirect về trang login
    const url = `/sign-in?redirectTo=${location.pathname}`;
    return <Navigate to={url} replace />;
  }

  return childern || <Outlet />;
}

/*
    TH1:
    <Route 
        path="..."
        element={
            <ProtectedRoute>
                <Component/>
            </ProtectedRoute>
        }
    />

    TH2: 
    <Route element={<ProtectedRoute />}>

        // Định nghĩa các Route khác muốn đc protect
        <Route path=".." element={<Component/>} />
    </Route>;
*/
