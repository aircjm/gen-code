export type DataSourceAddRequest = {
    dbType: number
    desc: string
    ip: string
    name: string,
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
