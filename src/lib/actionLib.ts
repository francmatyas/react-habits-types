import {default as pb} from "./pocketbase";
import {default as login} from "./pbLogin";
import {default as signup} from "./pbSignup";

class ActionLib {
  pb = pb
  login = login
  signup = signup
}

const actionLib = new ActionLib();

export default actionLib;
