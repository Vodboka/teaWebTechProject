import { PaginationDto } from "./PaginationDto";

export interface OrganizerFilterDto extends PaginationDto{
    organizerName: string
    organizerSurName: string
}