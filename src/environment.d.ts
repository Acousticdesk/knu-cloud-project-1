declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_HOST: string;
      DB_PORT: string;
      DB_USER: string;
      DB_NAME: string;
      DB_PASSWORD: string;
    }
  }
}

// converting a file to a TS module
export {};
