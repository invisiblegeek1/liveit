const initialState = {
  counter: 0,
  products:[],
  total:0
  // total:this.products.reduce((element1,element2) => {
  //   let qty1=element1.Quantity*element1.rate;
  //   let qty2=element2.Quantity*element2.rate
  //   return qty1 + qty2
    
  // })
};
//reducer

function Reducer(state = initialState, action) {
 
  
  switch (action.type) {
    case "INCREMENT":
    
        return {
          ...state,
          counter: state.counter + 1,
          products:[...state.products,action.payload],
          total:state.total + action.payload.Quantity*action.payload.rate,
          
        };

    case 'INCREMENT_QTY':
      return {
        ...state,
        products:state.products.filter((item)=>{if(item.id===action.id){
          return item.Quantity=item.Quantity + 1;

        }return item}),
        total:state.total + action.subtotal

        
      }
      case 'DECREMENT_QTY':
        return {
          ...state,
          products:state.products.filter((item)=>{if(item.id===action.id &&item.Quantity >1){
            return item.Quantity=item.Quantity - 1
  
          }return item}),
          total:state.total - action.subtotal
          
        } 
          
     
        
      default:
      return state;
  }
  
}

export default Reducer;
