export type DataSourceAddRequest = {
    dbType: number
    desc: string
    host: string
    dbName: string,
    password: string
    port: number
    url: string
    username: string
}



export interface UserState {
    token: string;
    avatar: string | undefined;
    name: string;
    phone: string;
    role: number;
    id: number;
}
