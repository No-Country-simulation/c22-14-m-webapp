import { config } from '../../config/env.js';
import { TokenService } from './token/token.service.js';

const secretKey = config.jwt_secret;
const expirationTime = config.jwt_expiration_time;
const tokenService = new TokenService(secretKey, expirationTime);

export { tokenService };