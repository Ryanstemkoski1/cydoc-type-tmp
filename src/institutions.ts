import { DiseaseForm } from "./disease";

export interface Institution {
    name: string;
    id: string;
    stripeCustomerId: string;
    logo: string;
}

export interface InstitutionConfig {
    id: number;
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
