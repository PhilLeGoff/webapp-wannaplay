import jwt from 'jsonwebtoken';

const secretKey = process.env.ACCESS_TOKEN || 'your-secret-key';

export const useGenerateToken = (): string => {
  const payload = {
    // Include any payload data if necessary
  };

  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};
