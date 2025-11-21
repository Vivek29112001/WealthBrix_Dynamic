import LoginComponent from '@/components/authentication/auth/login'
import React from 'react'

const LoginPage = () => {
    return (
        <>
            <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
                <LoginComponent />
            </div>
        </>
    )
}

export default LoginPage