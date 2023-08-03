const initialState = {
  array: [],
};

const ADD_ELEMENT = 'ADD_ELEMENT';
const ADD_MANY_ELEMENTS = 'ADD_MANY_ELEMENTS';
const REMOVE_ELEMENT = 'REMOVE_ELEMENT';

const transformUsersToArray = (users) => {
  return users.map((user) => ({ id: user.id, value: user.username }));
};

export const arrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ELEMENT:
      return { ...state, array: [...state.array, action.payload] };
    case ADD_MANY_ELEMENTS:
      return {
        ...state,
        array: [...state.array, ...transformUsersToArray(action.payload)],
      };
    case REMOVE_ELEMENT:
      return {
        ...state,
        array: state.array.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};

export const addElementAction = (payload) => ({
  type: ADD_ELEMENT,
  payload,
});

export const addManyElementsAction = (payload) => ({
  type: ADD_MANY_ELEMENTS,
  payload,
});

export const removeElementAction = (payload) => ({
  type: REMOVE_ELEMENT,
  payload,
});
