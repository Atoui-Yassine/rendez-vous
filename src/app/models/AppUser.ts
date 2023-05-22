import { EduExp } from "./Experience";

export interface AppUser{
    id :number,
    lastname :string ,
    firstname :string ,
    password :string ,
    email:string
    dob :Date,
    lang:string,
    joinMail:boolean
    coverUrl:string,
    photoUrl:string
    bio:string
    jobTitle:string
    adresse :string
    gender:string
    educations:EduExp[],
    experiences:EduExp[]
}
export class infoUser {
    public id !:number;
    public lastname !:string ;
    public firstname !:string ;
    public password !:string ;
    public phonenumber !:string ;
    public  dob !:Date;
    public educations!:EduExp[];
    public experiences!:EduExp[];
}
