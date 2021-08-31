import axios from "axios";

function checkStatus(response) {
    if (response && (response.status >= 200 && response.status < 400)) {
      return response.data;
    }
    throw new Error();
}

function formatError(error) {
    return {
      ret: -1, // 前端自定义错误ret,如需详细显示错误信息可进一步扩展
      msg: '请求出错了'
    };
  }
  
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    post(url, data = {}, withCredentials = false) {
      return axios({
        method: 'post',
        url,
        data,
        withCredentials
      })
        .then(checkStatus)
        .catch(formatError);
    },
    get(url, data = {}, withCredentials = false) {
      return axios({
        method: 'get',
        url,
        params: data,
        withCredentials
      })
        .then(checkStatus)
        .catch(formatError);
    }
  };
