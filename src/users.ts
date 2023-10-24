export type ApiEditUserBase = Pick<
    DbUser,
    'phoneNumber' | 'email' | 'firstName' | 'lastName'
>;

// who this job / publication is intended for
export enum UserRole {
    MANAGER = 'manager', // assigned to groups
    CLINICIAN = 'clinician', // assigned to specific users
    STAFF = 'staff', // assigned to all students in specified brand
}

export interface DbUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    institutionId: string;
    institutionName: string;
    role: UserRole;
}
