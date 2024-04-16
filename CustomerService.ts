import axios from 'axios';
import { randomImageUrl } from 'random-image-url';
import { Customer } from '../types/Customer';

const BASE_URL = 'https://your-api-url.com';

export const getCustomers = async (): Promise<Customer[]> => {
  const response = await axios.get(`${BASE_URL}/customers`);
  const customers = response.data;

  return customers.map((customer: any) => ({
    ...customer,
    photos: Array.from({ length: 9 }, () => randomImageUrl.getRandomImageUrl()),
  }));
};