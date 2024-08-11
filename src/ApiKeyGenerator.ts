import crypto from 'crypto';
import * as jwtHelpers from '@beanc16/jwt-helpers';

export type ApiKey = crypto.UUID;

export class ApiKeyGenerator
{
    public static async get(expiresInSeconds?: number): Promise<string>
    {
        const apiKey = crypto.randomUUID();
        const jwt = jwtHelpers.getAccessToken(apiKey, expiresInSeconds);
        return jwt;
    }

    public static async isValid(hashedApiKey: string): Promise<boolean>
    {
        return await jwtHelpers.isTokenValid(hashedApiKey);
    }
}
