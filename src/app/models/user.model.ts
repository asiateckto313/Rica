export class User {
    id?: string;
    emailOrPhone?: string;
    firstName?: string;
    lastName?: string;
    pwd?: string;
    created_at?: Date = new Date()
    updated_at?: Date 
}
