import { DiseaseForm } from "./disease";

export interface Institution {
    id: string;
    name: string;
    specialty: string;
    product: string;
    stripeCustomerId: string;
    selfReportedNumSeats: number;
    logo: string;
    createdDate: string;
    lastUpdatedDate: string;

    intakeProductSettings?: IntakeProductSettings;
    intakePinnedForms?: IntakePinnedForm[];
}

export interface InstitutionConfig {
    id: string;
    institutionId: string;
    showChiefComplaints: boolean;
    showDefaultForm: boolean;
    diseaseForm: DiseaseForm[];
}

export interface InstitutionDetails {
    id: number;
    name: string;
    logo: string;
}


export type IntakeProductSettings = {
    id: string;
    institutionId: string;
    showChiefComplaints: boolean;
    showDefaultForms: boolean;
    createdDate: string;
    lastUpdatedDate: string;
};

export type IntakePinnedForm = {
    id: string;
    institutionId: string;
    stepOrder: number;
    formCategory: string;
    formPurpose: string;
    createdDate: string;
    lastUpdatedDate: string;
};
