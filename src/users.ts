export type ApiEditUserBase = Pick<
    DbUser,
    'phoneNumber' | 'email' | 'firstName' | 'lastName'
>;

export interface DbUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    institutionId: string;
    institutionName: string;
    role: 'manager' | 'clinician';
}
