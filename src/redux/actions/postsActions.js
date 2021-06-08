export const setPosts = (posts) => {
  return {
    type: "SET_POSTS",
    payload: posts,
  };
};

export const deletePost = (id) => {
  return {
    type: "DELETE_POST",
    payload: id,
  };
};

export const addPost = (input) => {
  return {
    type: "ADD_POST",
    payload: input,
  };
};

export const showPost = (id) => {
  return {
    type: "SHOW_POST",
    payload: id,
  };
};

export const editPost = (input) => {
  return {
    type: "EDIT_POST",
    payload: input,
  };
};
