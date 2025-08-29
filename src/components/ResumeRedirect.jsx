import { useEffect } from "react";

export default function ResumeRedirect() {
  useEffect(() => {
    // Redirect to external Google Drive link
    window.location.href = "https://drive.google.com/file/d/1hrCi8RYmjNIVSr-1TBs4xWz9CQLf3Vyv/view?usp=sharing";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary text-accent">
      <div className="text-center">
        <p className="text-lg">Redirecting to resume...</p>
      </div>
    </div>
  );
}
