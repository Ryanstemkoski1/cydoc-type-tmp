export type ApiEditUserBase = Pick<
    DbUser,
    'phoneNumber' | 'email' | 'firstName' | 'lastName'
>;

export interface ApiEditManager extends ApiEditUserBase {
    associatedDoctors: Manager['associatedDoctors'];
    joinedDoctors: Manager['joinedDoctors'];
}

export interface DbUser {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    institutionId?: string;
    role: 'manager' | 'clinician';
}

export interface Manager extends DbUser {
    associatedDoctors: string[];
    joinedDoctors: string[];
}
export interface Doctor extends DbUser {
    joinedManager: string;
}

export interface ClinicianSignUpData extends DbUser {
    newPassword: string;
    confirmNewPassword: string;
    confirmEmail: string;
    confirmPhoneNumber: string;
    institutionName: string;
}
