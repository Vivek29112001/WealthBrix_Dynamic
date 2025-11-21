import LoginComponent from '@/components/authentication/auth/login'
import Seo from '@/shared/seo/seo'
import React from 'react'

const LoginPage = () => {
    return (
        <>
            <Seo title="Login" />
            <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
                <LoginComponent />
            </div >
        </>
    )
}

export default LoginPage