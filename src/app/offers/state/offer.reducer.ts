const initialState ={
  offers :[
    {
        name: "nouara",
        phone:"09876",
        address:"6 raod 80",
        membership:"jw",
        id:1
    }
  ],
  loading: false,
  loaded: true
};
export function offerReducer(state =initialState, action) {
  switch (action.type) {
    case "LOAD_OFFER": {
      return {
        ...state,
        loading:true,
        loaded:false
      };
    }
       default:{
         return state;
       }
  }

}
