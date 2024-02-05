// import {API} from "../appConfig";
import {User} from "../../app/types/user";
import {AxiosResponse} from "axios";

export class UsersAPI {
  public getUsers(): Promise<AxiosResponse<User[]>> {
    // return API.get('user')
    return new Promise(function(resolve) {
      setTimeout(resolve, 1500);
    })


  }

}

const usersAPI = new UsersAPI()
export default usersAPI