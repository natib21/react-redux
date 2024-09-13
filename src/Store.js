import { combineReducers, createStore } from "redux";
const intialVal = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
const intialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};
const accountReducer = (state = intialVal, action) => {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.ammount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.ammount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
};

const customerReducer = (state = intialStateCustomer, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const Store = createStore(rootReducer);
const deposit = (amount) => {
  return { type: "account/deposit", payload: amount };
};

const withdraw = (amount) => {
  return { type: "account/withdraw", payload: amount };
};

const requestLoan = (amount, purpose) => {
  return {
    type: "account/requestLoan",
    payload: { ammount: amount, purpose: purpose },
  };
};

const payloan = () => {
  return { type: "account/payLoan" };
};

Store.dispatch(deposit(1000));
Store.dispatch(withdraw(100));
console.log(Store.getState());

Store.dispatch(requestLoan(5000, "To Buy A home"));
console.log(Store.getState());

const createCustomer = (fullName, nationalId) => {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalId,
      createdAt: new Date().toISOString(),
    },
  };
};

const updateName = (fullName) => {
  return { type: "customer/updateName", payload: fullName };
};

Store.dispatch(createCustomer("Nathnael Zelalem", "0923479921"));
console.log(Store.getState());
Store.dispatch(updateName("Natanim Zelalem"));
console.log(Store.getState());
