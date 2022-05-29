import axios from "axios";
import { isEqualObject } from "crud-object-diff";
import { addManyCustomerAction } from "../store/customerReducer";

export const fetchCustomers = () => {
  return (dispatch, getState) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      // если те же объекты, то мы не добавляем х еще раз, а можем брать из кэша, или даже не менять стейт
      const prevCustomers = getState().customers.customers;
      const newCustomers = response.data.filter(
        (customer) =>
          !prevCustomers.find((_customer) => isEqualObject(_customer, customer))
      );
      if (newCustomers.length > 0)
        dispatch(addManyCustomerAction(newCustomers));
      else console.log("Взято из кэша");
    });
  };
};
