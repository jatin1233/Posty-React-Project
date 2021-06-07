const initialState = {
  posts: [],
  selectedPost: {},
};

let newId = 20;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: payload,
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== payload),
      };
    case "ADD_POST":
      newId++;
      return {
        ...state,
        posts: [
          {
            id: newId,
            title: payload.title,
            body: payload.body,
          },
          ...state.posts,
        ],
      };
    case "SHOW_POST":
      console.log("REACHED POST");
      return {
        ...state,
        selectedPost: { ...state.posts.filter((item) => item.id === payload) },
      };
    default:
      return state;
  }
};

export default reducer;
