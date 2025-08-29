import {
  TodoIcon,
  YtIcon,
  WeatherIcon,
  QuizIcon,
  HomeIcon,
  BlogIcon,
} from "./icons";

export type NavItem = {
  icon: React.FC;
  label: string;
  path: string;
  children?: NavItem[];
  childOpen: boolean;
};

export const baseClass =
  "py-2.5 hover:text-white hover:bg-blue-200 hover:text-black font-semibold transition-all duration-300 text-nowrap p-4 cursor-pointer flex items-center justify-start gap-3";
export const activeClass = "bg-[rgb(174,199,242)] text-white";

// Set path to "#" if there are children to avoid bad navigation behavior
export const navItems: NavItem[] = [
  {
    icon: HomeIcon,
    label: "Home",
    path: "/",
    children: [],
    childOpen: false,
  },
  {
    icon: TodoIcon,
    label: "Todos",
    path: "/todos",
    children: [],
    childOpen: false,
  },
  {
    icon: YtIcon,
    label: "Youtube",
    path: "/youtube",
    children: [],
    childOpen: false,
  },
  {
    icon: WeatherIcon,
    label: "Weather",
    path: "/weather",
    children: [],
    childOpen: false,
  },
  {
    icon: QuizIcon,
    label: "Quiz",
    path: "/quiz",
    children: [],
    childOpen: false,
  },
  {
    icon: BlogIcon,
    label: "Blog",
    path: "/blog",
    children: [],
    childOpen: false,
  },
];
