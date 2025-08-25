
"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getNetlifySubmissions } from "@/lib/actions";
import type { CastingSubmission } from "@/types/casting";
import { CastingAdminTable } from "@/components/casting-admin-table";
import { Button } from "@/components/ui/button";

export default function CastingAdminPage() {
    const { user, loading } = useAuth();
    const router = useRouter();
    const [submissions, setSubmissions] = useState<CastingSubmission[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login?redirect=/casting/admin');
        }
    }, [user, loading, router]);

    useEffect(() => {
        if (user) {
            const fetchSubmissions = async () => {
                setIsLoading(true);
                try {
                    const result = await getNetlifySubmissions();
                    if (result.success && result.data) {
                        setSubmissions(result.data);
                    } else {
                        setError(result.error || "Failed to load submissions.");
                    }
                } catch (err) {
                    setError("An unexpected error occurred.");
                } finally {
                    setIsLoading(false);
                }
            };
            fetchSubmissions();
        }
    }, [user]);

    if (loading || !user) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>Loading...</p>
            </div>
        );
    }
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/30 py-24 sm:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">
                            Admin Panel - Casting
                        </h1>
                         <Button onClick={() => getNetlifySubmissions().then(res => setSubmissions(res.data || []))}>Refresh</Button>
                    </div>

                    {isLoading ? (
                        <p>Loading submissions...</p>
                    ) : error ? (
                        <div className="text-destructive bg-destructive/10 p-4 rounded-md">
                            <h2 className="font-bold">Error</h2>
                            <p>{error}</p>
                            <p className="text-sm mt-2">Please ensure your Netlify Access Token and Form ID are set correctly in your environment variables.</p>
                        </div>
                    ) : (
                        <div className="bg-background/80 backdrop-blur-sm rounded-lg shadow-xl p-6 sm:p-10 border border-border">
                           <CastingAdminTable data={submissions} />
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
