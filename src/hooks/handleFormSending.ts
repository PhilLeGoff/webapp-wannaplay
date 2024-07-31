type TRes = {
  success: boolean;
  message: string;
};

export default async function handleFormSending(userData: any) {
    console.log("form sending", userData)
  const response = await fetch('/api/signup/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const responseData: TRes = await response.json();

  return responseData;
}
