import { Conference } from "./Conference"

export interface Organizer{
    OrganizerId : number,
    OrganizerName: string,
    OrganizerSurName: string,
    OrganizerPhone: string | null,
    OrganizerEmail: string | null,
    Conferences: Conference[]   
}