export interface ENV {
    NODE_ENV: string | undefined;
    PORT: number | undefined;
    CLIENT_URL: string | undefined;
    MONGODB_URL: string | undefined;
    AUTHORIZATION_KEY: string | undefined;
    JWT_SECRET: string | jwt.Secret;
}
