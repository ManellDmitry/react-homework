import { createContext } from "react";
import { getLocale } from "../i18n";

const navLinks = [
  { id: "1", label: getLocale("Home"), path: "", iconName: "home" },
  {
    id: "2",
    label: getLocale("know_how"),
    path: "kontakt",
    iconName: "project",
  },
  { id: "3", label: getLocale("o_nas"), path: "o-nas", iconName: "team" },
  { id: "4", label: getLocale("blog"), path: "blog", iconName: "calendar" },
  {
    id: "5",
    label: getLocale("kontakt"),
    path: "kontakt",
    iconName: "documents",
  },
];

const user = {
  avatar:
    "https://upload.wikimedia.org/wikipedia/uk/a/a4/%D0%92%D0%BE%D0%BB%D0%B4%D0%B5%D0%BC%D0%BE%D1%80%D1%82.jpg",
  name: {
    firstName: "Dmitry",
    lastName: "Manel",
  },
};

export const AppContext = createContext({ navLinks, user });
