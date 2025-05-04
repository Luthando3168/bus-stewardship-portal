
import React from "react";
import { Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import AppRoutes from "./routes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [userRole, setUserRole] = React.useState(localStorage.getItem("userRole"));

  React.useEffect(() => {
    if (isLoggedIn && !localStorage.getItem("clientNumber")) {
      const year = new Date().getFullYear();
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const clientNumber = `LM${year}${randomNum}`;
      localStorage.setItem("clientNumber", clientNumber);
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
      setUserRole(localStorage.getItem("userRole"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <AuthProvider>
      <Routes>
        <AppRoutes />
      </Routes>
      <Toaster position="top-center" />
    </AuthProvider>
  );
}

export default App;
