export default (state, action) => {
  switch (action.type) {
    case "add_blog":
      return [...state, { ...action.payload }];
    case "remove_blogs":
      return [];
  }
};
