export interface loggedin{
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    roles:string[],
    accessToken:string,
    refresh_Token:string
}