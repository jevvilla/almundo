import {BASE_URL} from 'src/common/constants';

export const getHotels = async () => {
  try {
    const request = await fetch(`${BASE_URL}/hotels`);
    const {data} = await request.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getHotelDetails = async (id: string) => {
  try {
    const request = await fetch(`${BASE_URL}/hotels/details/${id}`);
    const {data} = await request.json();
    return data;
  } catch (error) {
    return error;
  }
};
