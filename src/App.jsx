import { BrowserRouter, Router, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Router path="dashboard" element={<Dashboard />}/>
    <Router path="bookings" element={<Bookings />}/>
    <Router path="cabins" element={<Cabins />}/>
    <Router path="users" element={<Users />}/>
    <Router path="settings" element={<Settings />}/>
    <Router path="account" element={<Account />}/>
    <Router path="login" element={<Login />}/>
    <Router path="*" element={<PageNotFound />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;