import * as UserActions from "./user";
import * as TodoActions from "./todo";

const ActionCreators = {
  ...UserActions,
  ...TodoActions,
};

export default ActionCreators;