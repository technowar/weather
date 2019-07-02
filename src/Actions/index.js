import Services from '../Services';
import {ErrorObject} from '../Stores';

export const SearchCity = async (payload) => {
  try {
    const forecast = await Services.get(`forecast/?q=${payload.city}&appid=d2785f6b76897eb3d876cb3a97d5e707`);
    const {
      data: {
        sys: {
          sunrise,
          sunset,
        }
      }
    } = await Services.get(`weather/?q=${payload.city}&appid=d2785f6b76897eb3d876cb3a97d5e707`);

    console.log(forecast);
  } catch (error) {
    ErrorObject.update(() => error.response);
  }
}
