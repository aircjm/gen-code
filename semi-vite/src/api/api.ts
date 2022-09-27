import {request} from "./request";
import {UserState} from "../pages/datasource";

export const APIURL = {
    datasource: {
        list: "/datasource/list"
    }
}


export const datasourceList = () => request<UserState>({
    url: APIURL.datasource.list,
    method: "post",
    data: {}
})