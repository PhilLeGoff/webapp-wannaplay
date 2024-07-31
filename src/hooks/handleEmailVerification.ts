type TRes = {
  success: boolean;
  message: string;
};

export default async function handleEmailVerification(email: string | any) {
  // Change with actual email verification regex
  if (email !== '') {
    const response = await fetch(`/api/signup/${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData: TRes = await response.json();

    return responseData;
  } else return { success: false, message: 'Email not valid' };
}
