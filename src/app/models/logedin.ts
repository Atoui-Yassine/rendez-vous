export interface loggedin{
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    roles:string[],
    token:string,
    refresh_Token:string
}