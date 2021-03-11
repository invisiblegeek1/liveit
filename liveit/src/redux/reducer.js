const initialState = {
  counter: 0,
  products: [],
  total: 0,
  CurrentUser:[]
  
};

//actions
const idChecker = (state, payload) => {
  return state.products.filter((item) => item.id === payload.id).length > 0;
};
const incrementCounter = (state, action) => {
  let id = idChecker(state, action.payload);
  console.log(id);
  if (id) {
    return {
      ...state,

      products: state.products.filter((item) => {
        if (item.id === action.payload.id) {
          return (item.Quantity = item.Quantity + 1);
        }
        return item;
      }),
      total: state.total + action.payload.Quantity * action.payload.rate,
    };
  } else {
    return {
      ...state,
      counter: state.counter + 1,
      products: [...state.products, action.payload],
      total: state.total + action.payload.Quantity * action.payload.rate,
    };
  }
};

const incrementQuantity = (state, action) => {
  return {
    ...state,
    products: state.products.filter((item) => {
      if (item.id === action.id) {
        return (item.Quantity = item.Quantity + 1);
      }
      return item;
    }),
    total: state.total + action.subtotal,
  };
};

const decrementQuantity = (state, action) => {
  return {
    ...state,
    products: state.products.filter((item) => {
      if (item.id === action.id && item.Quantity > 1) {
        return (item.Quantity = item.Quantity - 1);
      }
      return item;
    }),
    total: state.total - action.subtotal,
  };
};

const productIndex= (state,action)=>{
  return state.products.findIndex((item)=>item.id===action.id)

}

const decrementCounter = (state, action) => {
  let index=productIndex(state,action);
  
  
  return {
    ...state,
    products: [
      ...state.products.slice(0, index),
      ...state.products.splice(index + 1),
    ],
    counter: state.counter - 1,
    total: state.total - action.Quantity * action.rate,

  };
};
//reducer

function Reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return incrementCounter(state, action);

    case "INCREMENT_QTY":
      return incrementQuantity(state, action);

    case "DECREMENT_QTY":
      return decrementQuantity(state, action);

    case "DECREMENT":
      return decrementCounter(state, action);
    case 'ADD_USER':
      return {
        ...state,
        CurrentUser:[...state.CurrentUser,...action.user]

      }


    default:
      return state;
  }
}

export default Reducer;
