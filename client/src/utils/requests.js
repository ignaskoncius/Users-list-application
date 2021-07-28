import axios from 'axios';

export const getAllUsers = async () => {
  try {
    const usersFromDb = await axios.get('http://localhost:4000/allUsers');
    return usersFromDb.data;
  } catch (error) {
    console.log(error);
  }
};

export const createUserSend = async (dataToCreateNewUser) => {
  try {
    const createdUser = await axios.post('http://localhost:4000/users/new', dataToCreateNewUser);
    return createdUser.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete('http://localhost:4000/allUsers/delete/' + userId);
  } catch (error) {
    console.log(error);
  }
};
