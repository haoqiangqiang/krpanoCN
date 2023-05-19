import React, { FC, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "../../interfaces/common.interface";
import { MenuItem, MenuTitle } from "./styled";

interface Props {
    menu: Menu[]
}

const MenuBlock: FC<Props> = ({ menu }) => {
    const navigate = useNavigate()
    const linkTo = (menuItem: Menu) => {
        navigate(menuItem.link!)
    }
    return (
        <>
            {
                menu.map((menuItem) => (
                    <Fragment key={menuItem.title}>
                        <MenuTitle>{menuItem.label}</MenuTitle>
                        {menuItem.child && menuItem.child.map((menuChildItem) => (
                            <MenuItem key={menuChildItem.title}><span onClick={() => linkTo(menuChildItem)!}>{menuChildItem.label}</span></MenuItem>
                        ))}
                    </Fragment>
                ))
            }
        </>
    )
}

export default MenuBlock;
