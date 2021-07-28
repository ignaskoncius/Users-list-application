import axios from 'axios';

export const getAllUsers = async () => {
  try {
    const usersFromDb = await axios.get('http://localhost:4000/allUsers');
    return usersFromDb.data;
  } catch (error) {
    console.log(error);
  }
};
