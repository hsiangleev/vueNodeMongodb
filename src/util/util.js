
import "@babel/polyfill";
import axios from "axios";
export function post(address,data,successBack,errorBack) {
    axios({
        method: 'post',
        url: address,
        data: data
    })
    .then(successBack)
    .catch(errorBack);
}