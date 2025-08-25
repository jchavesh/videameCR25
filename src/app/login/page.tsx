
import { LoginForm } from "@/components/login-form";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-secondary/30">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-md mx-auto bg-background/80 backdrop-blur-sm rounded-lg shadow-xl p-8 sm:p-12 border border-border">
                    <div className="text-center mb-8">
                        <h1 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                            Admin Login
                        </h1>
                        <p className="mt-2 text-muted-foreground">
                            Please sign in to continue.
                        </p>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </main>
        <Footer />
    </div>
  );
}
