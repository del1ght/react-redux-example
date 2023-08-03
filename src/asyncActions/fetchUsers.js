import { addManyElementsAction } from '../store/arrayReducer';

export const fetchUsers = () => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    dispatch(addManyElementsAction(json));
  };
};
