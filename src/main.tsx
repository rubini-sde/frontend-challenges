import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", margin: 0, fontFamily: "sans-serif", background: "#f5f5f5" }}>
      <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 2px 16px rgba(0,0,0,0.08)", padding: "2.5rem 3rem", textAlign: "center", maxWidth: "480px" }}>
        <h1 style={{ fontSize: "1.6rem", color: "#222", marginBottom: "0.75rem" }}>Welcome to Frontend Challenges</h1>
        <p style={{ fontSize: "1.1rem", color: "#666", margin: 0 }}>Run Storybook to explore the implemented UI components.</p>
      </div>
    </div>
  </StrictMode>
);
