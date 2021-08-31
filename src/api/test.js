import api from './index';

export function queryVersionReq() {
    return api.post(`/api/version/queryVersion/normal`, {})
}
