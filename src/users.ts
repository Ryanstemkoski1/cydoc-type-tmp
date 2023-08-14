export type ApiEditUserBase = Pick<
    DbUser,
    'phoneNumber' | 'email' | 'firstName' | 'lastName'
>;

export interface DbUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    institutionId: number;
    institutionName: string;
    role: 'manager' | 'clinician';
}
