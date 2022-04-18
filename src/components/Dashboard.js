import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <div className="w-100 text-right mt-2">
        <Button variant="danger" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
