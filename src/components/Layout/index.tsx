import React, { FC } from "react";
import Navigation from "../Navifation";
import Feature from "../Feature";

interface Props {
    children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Feature></Feature>
            <Navigation></Navigation>
            {children}
        </>
    )
}

export default Layout;