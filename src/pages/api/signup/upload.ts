import { NextApiRequest, NextApiResponse } from 'next';
import { useGenerateToken } from '@/hooks/useGenerateToken';
import SERVER_URL from '../../../../config';

export const config = {
  api: {
    bodyParser: true, // Enable default body parser
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = useGenerateToken();

  console.log(JSON.stringify(req.body));

  try {
    const response = await fetch(`${SERVER_URL}/users/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const responseData = await response.json();
    res.status(response.status).json(responseData);
  } catch (error) {
    console.error('Error forwarding data to Express:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
