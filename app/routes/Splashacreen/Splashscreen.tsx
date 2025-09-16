import { useEffect } from "react";
import { useNavigate } from "@remix-run/react";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 3000); // Redirects after 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <h1 className="text-white text-4xl">Welcome to My Banking App</h1>
    </div>
  );
}