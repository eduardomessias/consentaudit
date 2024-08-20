// src/components/Layout.tsx
import React from 'react'


import NavBar from './navbar'
import Footer from './footer'


interface LayoutProps {
    children: React.ReactNode;
}

const searchContractByResIdFormData = () => {
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <>
        <NavBar searchContract={searchContractByResIdFormData} />
        {children}
        <Footer />
    </>
}

export default Layout
