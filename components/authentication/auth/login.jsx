// components/login-card.jsx

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    CardAction,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginComponent() {
    return (
        <Card className="w-full max-w-sm bg-white shadow-xl border border-gray-200">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">Login</CardTitle>
                <CardDescription>
                    Sign in to access your estate dashboard
                </CardDescription>

                <CardAction>
                    <Button variant="link" className="px-0">
                        Create Account
                    </Button>
                </CardAction>
            </CardHeader>

            <CardContent>
                <form className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <Label htmlFor="password">Password</Label>
                            <a className="text-sm underline" href="#">
                                Forgot?
                            </a>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                </form>
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
                <Button className="w-full">Login</Button>
                <Button variant="outline" className="w-full">
                    Login with Google
                </Button>
            </CardFooter>
        </Card>
    );
}
