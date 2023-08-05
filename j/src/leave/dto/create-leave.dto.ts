export class CreateLeaveDto {
    id: number;

    userId: number;

    startDate: string;

    endDate: string;

    reason: string;

    approval?:number;

    createdBy: number;

    createdAt: string;

    updatedBy: number;

    updatedAt: string;

    status:number
}
