export type Appointment = {
    id: string;
    appointmentDate: string;
    patientId: string;
    clinicianId?: string;
    institutionId: string;
    appointmentTemplateId?: string;
    createdDate: string;
    lastUpdatedDate: string;
    notes?: Note[];
    template?: AppointmentTemplate;
};

export type Note = {
    id: string;
    hpi: string;
    createdDate: string;
    lastUpdatedDate: string;
    appointmentId: string;
};

export type AppointmentTemplateStep = {
    id: string;
    appointmentTemplateId: string;
    stepOrder: number;
    completedBy: string;
    taskType: string;
    formCategory: string;
    required: boolean;
    createdDate: string;
    lastUpdatedDate: string;
};

export type AppointmentTemplate = {
    id: string;
    templateTitle: string;
    institutionId: string;
    createdDate: string;
    lastUpdatedDate: string;
    steps?: AppointmentTemplateStep[];
};
