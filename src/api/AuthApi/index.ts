// import {API} from "../appConfig";
import {User} from "../../app/types/user";
import {AxiosResponse} from "axios";

export class AuthAPI {
  public getSession(): Promise<AxiosResponse<User>> {
    // return API.get('user')
    return new Promise(function(resolve) {
      setTimeout(resolve, 1500);
    })
  }

}

const authAPI = new AuthAPI()
export default authAPI