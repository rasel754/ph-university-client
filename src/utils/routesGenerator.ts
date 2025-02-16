
import { TRoute, TUsersPaths } from "../types/sidebarTypes";



export const routeGenerator = (items: TUsersPaths[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.paht && item.element) {
      acc.push({
        path: item.paht,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.paht !,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);

  return routes;
};
