import {request} from "./request";
import {DataSourceAddRequest, ProjectAddRequest, UserState} from "../models/DataSource";

export const APIURL = {
    project: {
        list: "/project/list",
        save: "/project/save",
        detail: "/project/detail"
    }
}


export const projectList = () => request<UserState>({
    url: APIURL.project.list,
    method: "post",
    data: {}
})



export const projectSave = (param: ProjectAddRequest) => request({
    url: APIURL.project.save,
    method: "post",
    data: param
})

export const projectDetail = (id: any) => request({
    url: APIURL.project.detail,
    method: "get",
    params: {
        id: id
    }
})
