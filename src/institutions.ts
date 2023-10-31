import { DiseaseForm } from "./disease";

export interface Institution {
    name: string;
    id: string;
    stripeCustomerId: string;
}

export interface InstitutionConfig {
    id: number;
    institutionId: string;
    showChiefComplaints: boolean;
    showDefaultForm: boolean;
    diseaseForm: DiseaseForm[];
}