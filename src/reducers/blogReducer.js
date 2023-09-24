export default (state, action) => {
  switch (action.type) {
    case "add_blog":
      return [...state, { ...action.payload }];
    case "remove_blogs":
      return [];
      case "change_blog":
      return state.map(elem=>{
        if (elem.id === action.payload.id){
          return {...action.payload}
        }else{
          return elem;
        }
      })
  }
};
