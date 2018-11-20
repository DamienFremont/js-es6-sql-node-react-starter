import { HelloResponse } from "../model/hello/HelloModel";

class HelloAPI {

  static async callApi() {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return new HelloResponse(body);
  };

}
export default HelloAPI;