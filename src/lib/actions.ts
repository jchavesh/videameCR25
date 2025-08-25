
"use server";

import type { CastingSubmission } from "@/types/casting";

interface NetlifyFile {
    id: string;
    filename: string;
    size: number;
    mime_type: string;
    url: string;
}

interface NetlifySubmission {
    id: string;
    form_id: string;
    form_name: string;
    created_at: string;
    data: {
        [key: string]: any;
        headshot: NetlifyFile;
        fullBodyPhoto: NetlifyFile;
        additionalPhotos?: NetlifyFile | NetlifyFile[];
    };
}

export async function getNetlifySubmissions(): Promise<{ success: boolean; data?: CastingSubmission[]; error?: string }> {
    const { NETLIFY_ACCESS_TOKEN, NETLIFY_FORM_ID } = process.env;

    if (!NETLIFY_ACCESS_TOKEN || !NETLIFY_FORM_ID) {
        return { 
            success: false, 
            error: "Netlify environment variables are not set on the server." 
        };
    }

    try {
        const url = `https://api.netlify.com/api/v1/forms/${NETLIFY_FORM_ID}/submissions`;
        const response = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${NETLIFY_ACCESS_TOKEN}`,
            },
            cache: 'no-store' // Ensure fresh data on every request
        });

        if (!response.ok) {
            const errorText = await response.text();
            return { 
                success: false, 
                error: `Failed to fetch from Netlify: ${response.status} ${response.statusText}. Details: ${errorText}`
            };
        }

        const submissions: NetlifySubmission[] = await response.json();
        
        const formattedData: CastingSubmission[] = submissions.map(s => ({
            id: s.id,
            submittedAt: s.created_at,
            fullName: s.data.fullName,
            age: parseInt(s.data.age, 10),
            email: s.data.email,
            phone: s.data.phone,
            city: s.data.city,
            hasExperience: s.data.hasExperience,
            headshot: s.data.headshot?.url,
            fullBodyPhoto: s.data.fullBodyPhoto?.url,
            data: s.data
        }));

        return { success: true, data: formattedData };
    } catch (error) {
        console.error("Error fetching Netlify submissions:", error);
        return { success: false, error: "An unexpected server error occurred." };
    }
}
