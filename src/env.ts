/// <reference types="vite/client" />

const env = {
  RESUME_URL: import.meta.env.VITE_RESUME_URL as string,
} as const;

export default env;
