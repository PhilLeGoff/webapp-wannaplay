interface Birthday {
  day: number | null;
  month: { name: string | null; number: number | null };
  year: number | null;
}

export default interface ISignUpData {
  value: {
    username: string | null;
    email: string | null;
    firstname: string | null;
    lastname: string | null;
    birthday: Birthday;
    instrumentPlayed: string[];
    instrumentTaught: string[];
    genresPlayed: string[];
    genresLiked: string[];
    description: string | null;
    profilePicture: string | null;
    method: string | null;
    password: string | null;
  };
}

export interface ISignUpDataValue {
  username: string | null;
  email: string | null;
  firstname: string | null;
  lastname: string | null;
  birthday: Birthday;
  instrumentPlayed: string[];
  instrumentTaught: string[];
  genresPlayed: string[];
  genresLiked: string[];
  description: string | null;
  profilePicture: string | null;
  method: string | null;
  password: string | null;
}
