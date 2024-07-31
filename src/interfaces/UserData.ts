export interface UserData {
  firstName: string;
  lastName: string;
  birthday: { day: string | null; month: string | null; year: string | null };
  instrumentPlayed: string[];
  instrumentTaught: string[];
  genresPlayed: string[];
  genresLiked: string[];
  description: string;
  profilePicture: string | null;
}
