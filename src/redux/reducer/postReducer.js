const initialState = {
  posts: [],
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
            title: payload.formTitle,
            body: payload.formBody,
          },
          ...state.posts,
        ],
      };
    case "EDIT_POST":
      let oldData = state.posts;
      const index = oldData.findIndex((post) => post.id === payload.id);
      oldData[index] = {
        id: payload.id,
        title: payload.formTitle,
        body: payload.formBody,
      };
      return {
        ...state,
        posts: oldData,
      };

    // return {
    //   ...state,
    //   posts: state.posts.map((post) => {
    //     if (post.id == payload.id) {
    //       return {
    //         id: payload.id,
    //         title: payload.title,
    //         body: payload.body,
    //       };
    //     } else {
    //       return post;
    //     }
    //   }),

    // case "SHOW_POST":
    //   return {
    //     ...state,
    //     selectedPost: {
    //       ...state.posts.map((item) => {
    //         if (item.id === payload) {
    //           return item;
    //         }
    //       }),
    //     },
    //   };
    default:
      return state;
  }
};

export default reducer;
