import { createStore } from "redux";

const INITIAL_STATE = {
  data: ["ReactJs", "React Native", "golang"]
};

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return { ...state, data: [...state.data, action.title] };

    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
