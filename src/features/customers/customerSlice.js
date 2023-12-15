import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      // prepare is function that will pass params to reducer
      // Date() has small side Effect so we can not use in
      // reducer should write in prepare function
      // Or to compute random ID, we must do in prepare function not
      // reducer
      prepare: function (fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString,
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

// export default function customerReducer(state = initStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };

//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//       };

//     default:
//       return state;
//   }
// }

// // create action for customer
// export function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullName: fullName,
//       nationalID: nationalID,
//       createdAt: new Date().toISOString(),
//     },
//   };
// }

// export function updateName(fullName) {
//   return {
//     type: "customer/updateName",
//     payload: {
//       fullName: fullName,
//     },
//   };
// }

// store.dispatch(createCustomer("Tom Hardy", "IR1237654"));
// console.log(store.getState());
// store.dispatch(updateName("Upated Name"));
// console.log(store.getState());
