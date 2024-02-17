const initialState = {
    products: [], // Assuming you fetch products from the mock JSON
    cartCounter: 0,
    cartItems: [] // Array to store cart items
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Find the index of the product in cartItems array
        const index = state.cartItems.findIndex(item => item.id === action.payload.id);
  
        if (index !== -1) {
          // If the item already exists in the cart, update its amount
          const updatedCartItems = [...state.cartItems];
          updatedCartItems[index].amount++;
          return {
            ...state,
            cartCounter: state.cartCounter + 1,
            cartItems: updatedCartItems
          };
        } else {
          // If the item is not in the cart, add it
          return {
            ...state,
            cartCounter: state.cartCounter + 1,
            cartItems: [...state.cartItems, { ...action.payload, amount: 1 }]
          };
        }
      default:
        return state;
    }
  };
  
  export default rootReducer;
  