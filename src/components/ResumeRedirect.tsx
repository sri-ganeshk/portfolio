import { useEffect } from "react";
import env from '../env';

export default function ResumeRedirect(): null {
  useEffect(() => {
    window.location.href = env.RESUME_URL;
  }, []);

  return null;
}
