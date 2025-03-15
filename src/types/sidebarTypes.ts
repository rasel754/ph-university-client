import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TUsersPaths = {
  name: string;
  paht?: string;
  element?: ReactNode;
  children?: TUsersPaths[];
};

export type TSidebarItem ={
  key: string;
  label: ReactNode;
  children?: TSidebarItem[]
} | undefined;