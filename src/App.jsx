import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login"
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import AddSubscription from './pages/addSubscription';
import EditSubscription from './pages/editSubscription';
import User from './pages/user';
import MainLayout from './layouts/MainLayout';

import './App.css'

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Protected/App Routes wrapped in MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-subscription" element={<AddSubscription/>} />
        <Route path="/edit-subscription/:id" element={<EditSubscription/>} />
        <Route path="/user" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App
