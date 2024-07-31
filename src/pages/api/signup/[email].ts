// Checks if user email is already registered

import { useGenerateToken } from '@/hooks/useGenerateToken';
import SERVER_URL from '../../../../config';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.query;
  const token = useGenerateToken();

  try {
    let response: any = await fetch(
      `${SERVER_URL}/users/signup_checkup/${email}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    response = await response.json();

    response.success
      ? res.status(201).json(response)
      : res.status(404).json(response);
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
}
