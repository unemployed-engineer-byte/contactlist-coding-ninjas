//This code defines a Redux reducer function named contactReducer

const initialState = []; //initializes the initial state for the contactReducer

//The reducer takes the current state and an action as arguments and returns the new state based on the action type
const contactReducer = (state = initialState, action) => {  //action dispatched to the reducer
    switch (action.type) {
        case 'FETCH_CONTACTS':
            return action.payload;
        case 'ADD_CONTACT':
            return [...state, action.payload];
        case 'UPDATE_CONTACT':
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = updateState;
            return state;
        case 'DELETE_CONTACT':
            const filterContacts = state.filter(contact => contact.id !== action.payload && contact);
            // It returns a new state array without the deleted contact.
            return filterContacts;
        default:
            //If the action type does not match any of the defined cases, the reducer returns the current state unchanged.
            return state;
    }
}

export default contactReducer;

