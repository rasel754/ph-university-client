import { NavLink } from "react-router-dom";
import { TSidebarItem, TUsersPaths } from "../types/sidebarTypes";

export const sidebarItemsGenerator = (items: TUsersPaths[], role:string) => {
  const SidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.paht && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.paht}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,

        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: (
                <NavLink to={`/${role}/${child.paht}`}>{child.name}</NavLink>
              ),
            };
          }
        }),
      });
    }

    return acc;
  }, []);

  return SidebarItems;
};
