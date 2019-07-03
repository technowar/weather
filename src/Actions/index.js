import Services from '../Services';
import {DataObject, ErrorObject} from '../Stores';

export const SearchCity = async (payload) => {
  try {
    const {
      data: {
        list,
      }
    } = await Services.get(`forecast/?q=${payload.city}&units=metric&appid=d2785f6b76897eb3d876cb3a97d5e707`);
    const {
      data: {
        name,
        sys: {
          country,
          sunrise,
          sunset,
        }
      }
    } = await Services.get(`weather/?q=${payload.city}&units=metric&appid=d2785f6b76897eb3d876cb3a97d5e707`);

    let hour = new Date().getHours();

    do {
      hour += 1;
    } while (hour%3);

    const time = new Date().getTime()/1000|0;
    const stylesheet = document.querySelector('#stylesheet');
    const option = {
      true: () => stylesheet.href.replace(/dark|light/gi, 'dark'),
      false: () => stylesheet.href.replace(/dark|light/gi, 'light'),
    };

    stylesheet.href = option[time > sunset]();

    DataObject.update(() => ({
      name,
      sys: {
        country,
        sunset,
        sunrise,
      },
      list: list.filter(list => parseInt(list.dt_txt.split(' ')[1].split(':')[0]) === hour),
    }));
  } catch (error) {
    ErrorObject.update(() => error.response);
  }
}
