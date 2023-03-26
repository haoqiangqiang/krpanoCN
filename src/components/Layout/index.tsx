import React, { FC } from "react";
import Navigation from "../Navifation";

interface Props {
    children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Navigation></Navigation>
            {children}
        </>
    )
}

export default Layout;