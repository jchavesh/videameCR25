
interface NetlifyFile {
    id: string;
    filename: string;
    size: number;
    mime_type: string;
    url: string;
}

export interface CastingSubmission {
    id: string;
    submittedAt: string;
    fullName: string;
    age: number;
    email: string;
    phone: string;
    city: string;
    hasExperience: 'Sí' | 'No';
    headshot: string;
    fullBodyPhoto: string;
    data: {
        [key: string]: any;
        additionalPhotos?: NetlifyFile | NetlifyFile[];
    };
}
