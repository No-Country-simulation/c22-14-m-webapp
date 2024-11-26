import jwt from 'jsonwebtoken';

class TokenService {
    constructor(secretKey, expirationTime) {
        this.secretKey = secretKey;
        this.expirationTime = expirationTime;
    }

    async createToken(id, expires = true) {
        const options = {
            algorithm: 'HS256',
        };

        if (expires) {
            options.expiresIn = this.expirationTime;
        }

        return new Promise((resolve, reject) => {
            jwt.sign({ id }, this.secretKey, options, (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            });
        });
    }

    async verifyToken(token) {
        return new Promise((resolve) => {
            jwt.verify(token, this.secretKey, (err, decoded) => {
                if (err) {
                    resolve(null);
                } else {
                    resolve(decoded);
                }
            });
        });
    }

    async getIdFromToken(token) {
        const payload = await this.verifyToken(token);
        return payload?.id || null;
    }
}

export { TokenService };
