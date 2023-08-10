import { DbUser } from '.';

export interface UpdateUserResponse {
    success: true;
    error?: string;
}

export interface CreateUserResponse extends ApiResponseBase {
    user?: DbUser;
}
export interface GetMembersResponse extends ApiResponseBase {
    members?: DbUser[];
}
export type InviteUserBody = Pick<
    DbUser,
    'email' | 'lastName' | 'role' | 'firstName' | 'institutionId'
>;

export interface CreateUserBody
    extends Pick<
        DbUser,
        | 'email'
        | 'institutionName'
        | 'firstName'
        | 'lastName'
        | 'phoneNumber'
        | 'role'
    > {
    institutionName: string;
    password: string;
}

export type UpdateUserBody = Pick<
    DbUser,
    'email' | 'firstName' | 'lastName' | 'phoneNumber'
>;

// Generic errored ApiResponseBase includes errorMessage
export interface ApiResponseBase {
    errorMessage?: string | undefined;
}

export type ApiPostBody = UpdateUserBody | InviteUserBody | CreateUserBody;
export type ApiResponse =
    | CreateUserResponse
    | GetMembersResponse
    | ApiResponseBase;
