declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    MONGODB_URI: string;
    JWT_SECRET: string;
    SESSION_SECRET: string;
    GOOGLE_CLIENT_ID:string;
    GOOGLE_CLIENT_SECRET:string;
    GOOGLE_REDIRECT_URI:string;
    REDIRECT_FRONTEND_URI: string;
    GOOGLE_REVOKE_TOKEN_URL: string;
  }
}
