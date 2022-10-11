import {request} from "./request";
import {ProjectAddRequest, UserState} from "../models/DataSource";
import {AxiosResponse} from "axios";
import {ProjectDetail} from "../models/Project";
import {ResponseData} from "../models";

export const APIURL = {
    project: {
        list: "/project/list",
        save: "/project/save",
        detail: "/project/detail"
    }
}


export const projectList = (): Promise<ResponseData<Array<ProjectDetail>>> => request<UserState>({
    url: APIURL.project.list,
    method: "post",
    data: {}
})


export const projectSave = (param: ProjectAddRequest): Promise<ResponseData<any>> => request({
    url: APIURL.project.save,
    method: "post",
    data: param
})

export const projectDetail = (id: any): Promise<any> => request({
    url: APIURL.project.detail,
    method: "get",
    params: {
        id: id
    }
})
