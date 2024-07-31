type TSignUpData = {
  username: string;
  email: string;
  profilePicture: string | null;
  password: string | null;
  method: 'manual' | 'google';
};

async function fetchData(signUpData: TSignUpData, endpoint: string) {
  const { username, email, password, profilePicture, method } = signUpData;

  let response = await fetch(`/api/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userData: signUpData }),
  });
  response = await response.json();
  console.log('api response');
  return response;
}

export default function handleFetchSignUpData(signUpData: TSignUpData) {
  // const {username, email, password, profilePicture, method} = signUpData
  console.log('hook passed data', signUpData);
  const responseData = fetchData(signUpData, 'signup');
  // signUpData.method == "manual"
  //   ? fetchData(signUpData, "signup")
  //   : fetchData(signUpData, "signup");

  return responseData;
}
