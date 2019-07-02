import Services from '../Services';

export const SearchCity = async (payload) => {
  try {
    const data = await Services.get(`?q=${payload.city}&appid=d2785f6b76897eb3d876cb3a97d5e707`);

    console.log(data);
  } catch (error) {
    console.log(error.response.statusText);
  }
}
