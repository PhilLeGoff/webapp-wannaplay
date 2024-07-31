import SERVER_URL from '../../../config';
import { NextApiRequest, NextApiResponse } from 'next';

type TUserData = {
  username: string;
  email: string;
  profilePicture: string | null;
  password: string | null;
  method: 'manual' | 'google' | 'github';
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userData = req.body.userData;
  console.log('api data passed', userData);
  const access_token = process.env.ACCESS_TOKEN;

  try {
    const responseData: any =
      userData.method === 'manual'
        ? await manualSignUp(userData, access_token)
        : await authSignUp(userData, access_token);
    responseData.success
      ? res.status(201).json(responseData)
      : res.status(404).json(responseData);
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
}

// manual sign up handling
async function manualSignUp(data: TUserData, access_token: string | undefined) {
  const response = await fetch(`${SERVER_URL}/users/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({ ...data, access_token }),
  });
  const jsonData = await response.json();
  return jsonData;
}

// next-auth sign up handling
async function authSignUp(data: TUserData, access_token: string | undefined) {
  const response = await fetch(`${SERVER_URL}/users/signup_auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({ ...data, access_token }),
  });
  const jsonData = await response.json();
  return jsonData;
}
