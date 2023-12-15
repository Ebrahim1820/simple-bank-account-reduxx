import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPorpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

function customerReducer(state = initStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload.fullName,
      };

    default:
      return state;
  }
}

// create root reducer to be able to use multiple reducer

const rootReduxer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
// create a store
const store = createStore(rootReduxer);
console.log(store.getState());
// store.dispatch({ type: "account/deposit", payload: 500 });

// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpos: "To Buy a car" },
// });

// Action creators
// the following function only use to return actions

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(loanAmount, purpose = "") {
  return {
    type: "account/requestLoan",
    payload: { amount: loanAmount, purpose: purpose },
  };
}

function payloan() {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(200));
store.dispatch(requestLoan(20000));
console.log(store.getState());

// create action for customer
function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName: fullName,
      nationalID: nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: {
      fullName: fullName,
    },
  };
}

store.dispatch(createCustomer("Ale Najafi", "IR1237654"));
console.log(store.getState());
store.dispatch(updateName("Upated Name"));
console.log(store.getState());
