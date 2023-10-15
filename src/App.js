import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./modules/Home";
import Details from "./modules/Details";
import Signin from "./modules/Auth/pages/Signin";
import Signup from "./modules/Auth/pages/Signup";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import UserProvider from "./contexts/UserContext/UserContext";
import ProtectedRoute from "./routers/ProtectedRoute/ProtectedRoute";
import AdminMovie from "./modules/AdminMovie/AdminMovie";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          {/* User */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="movies/:movieId" element={<Details />} />

            {/* Cách 1:
            <Route
              path="tickets/:showtimeId"
              element={
                <ProtectedRoute>
                  <div>Ticket Page</div>
                </ProtectedRoute>
              }
            /> */}

            {/* Cách 2 */}
            <Route element={<ProtectedRoute />}>
              <Route
                path="tickets/:showtimeId"
                element={<div>Ticket Page</div>}
              />

              <Route path="abc" element={<div>Ticket Page</div>} />
            </Route>

            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />
          </Route>

          {/* Admin */}
          {/* <Route element={<AdminProtectedRoute />}> */}
          <Route path="/admin">
            <Route path="movies" element={<AdminMovie />} />
          </Route>
          {/* </Route> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
