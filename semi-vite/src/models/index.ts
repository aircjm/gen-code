export type PageRequest = {
    pageSize: number;
    pageNum: number;
}


export interface ResponseData<T> {
    code: number;
    data: T;
    msg: string;
}


export type IdRequest = {
    id: number;
}
