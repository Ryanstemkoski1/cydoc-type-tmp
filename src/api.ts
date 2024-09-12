import { AppointmentTemplateStep, DbUser } from '.';

export interface UpdateUserResponse extends ApiResponseBase {
    user?: DbUser;
}
export interface GetMembersResponse extends ApiResponseBase {
    members?: DbUser[];
}
export interface InviteUserBody
    extends Pick<
        DbUser,
        'email' | 'lastName' | 'role' | 'firstName' | 'institutionId'
    > {
    isInvite: true;
}

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
    isInvite: false;
}

export type UpdateUserBody = Pick<
    DbUser,
    'email' | 'firstName' | 'lastName' | 'phoneNumber'
>;

export type ManagerUpdateUserBody = Pick<DbUser, 'id' | 'role'> &
    UpdateUserBody;

// Generic errored ApiResponseBase includes errorMessage
export interface ApiResponseBase {
    errorMessage?: string | undefined;
}
export interface GetStripeSetupUrlResponse extends ApiResponseBase {
    setupUrl: string;
}

export type AppointmentTemplatePostBody = {
    templateTitle: string;
    steps: Partial<AppointmentTemplateStep>[];
};

export type ApiPostBody =
    | ManagerUpdateUserBody
    | UpdateUserBody
    | InviteUserBody
    | CreateUserBody
    | AppointmentTemplatePostBody;
export type ApiResponse =
    | UpdateUserResponse
    | GetMembersResponse
    | ApiResponseBase;
