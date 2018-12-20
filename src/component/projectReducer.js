const initState = {}
  
  const projectReducer = (state = initState, action) => {
    switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create note success');
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create note error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;