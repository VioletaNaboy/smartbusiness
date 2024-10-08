import axios from 'axios';
import { User } from '../types/user';
export const fetchUsers = async (): Promise<User[]> => {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
};
