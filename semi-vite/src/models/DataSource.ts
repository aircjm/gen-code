export type DataSourceAddRequest = {
    id: number
    dbType: number
    desc: string
    host: string
    dbName: string,
    password: string
    port: number
    url: string
    username: string
}


export type DataSourceDetail = {
    id: number
    dbType: number
    desc: string
    host: string
    dbName: string,
    password: string
    port: number
    url: string
    username: string
}


export type ProjectAddRequest = {
    id: number;
    name: string
    projectName: string
}
