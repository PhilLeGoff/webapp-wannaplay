type TMandatoryData = {
  firstname: string | null;
  lastname: string | null;
  birthday: { day: string | null; month: string | null; year: string | null };
};

const useCheckMandatory = (mandatoryData: TMandatoryData) => {
  const { firstname, lastname, birthday } = mandatoryData;

  const isComplete =
    firstname !== null &&
    firstname.trim() !== '' &&
    lastname !== null &&
    lastname.trim() !== '' &&
    birthday.day !== null &&
    birthday.day.trim() !== '' &&
    birthday.month !== null &&
    birthday.month.trim() !== '' &&
    birthday.year !== null &&
    birthday.year.trim() !== '';

  return isComplete;
};

export default useCheckMandatory;
