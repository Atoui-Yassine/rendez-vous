import { Category } from "./Category";
import { EduExp } from "./Experience";
import {Address} from "./Address";
import { ProfilePro } from "./ProfilePro";
export interface AppUser{
    id :number,
    lastname :string ,
    firstname :string ,
    password :string ,
    email:string
    dob :Date,
    lang:string,
   
   
    photoUrl:string
    bio:string
   
    address :Address
    gender:string
   
    category:Category
   
    profilePro:ProfilePro
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
