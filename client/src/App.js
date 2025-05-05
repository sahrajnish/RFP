import RegisterVendorPage from "./pages/RegisterVendorPage";
import { ToastContainer } from 'react-toastify';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import './assets/css/bootstrap.css';
import './assets/css/icons.css';
import './assets/css/style.css';
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AddRFP from "./pages/AddRFP";
import ListRFP from "./pages/ListRFP";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-center" autoClose={3000} />
        <Routes>
          <Route path="/registervendor" element={<RegisterVendorPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/createrfp" element={<ProtectedRoute> <AddRFP /> </ProtectedRoute>}></Route>
          <Route path="/allrfp" element={<ProtectedRoute> <ListRFP /> </ProtectedRoute>}></Route>
          <Route path="/" element={<ProtectedRoute> <HomePage /> </ProtectedRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export function ProtectedRoute(props) {
  if(localStorage.getItem("user")) {
    return props.children
  } else {
    return <Navigate to="/login" replace/>
  }
}

export default App;