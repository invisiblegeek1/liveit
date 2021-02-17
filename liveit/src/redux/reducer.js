const initialState = {
  counter: 0,
  products:[]
};
//reducer

function Reducer(state = initialState, action) {
 
  
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
        products:[...state.products,action.payload]
      };

    case 'INCREMENT_QTY':
      return {
        ...state,
        products:state.products.filter((item)=>{if(item.id===action.id){
          return item.Quantity=item.Quantity + 1

        }return item})
      }
      case 'DECREMENT_QTY':
        return {
          ...state,
          products:state.products.filter((item)=>{if(item.id===action.id){
            return item.Quantity=item.Quantity - 1
  
          }return item})
        }  
     
        
      default:
      return state;
  }
  
}

export default Reducer;
