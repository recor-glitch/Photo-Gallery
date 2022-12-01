import CategoryIcon from "@mui/icons-material/Category";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

const baseurl = "https://api.unsplash.com/";

const client_id = "aXAjDVDv4KWTPXDqfA6f7HngiM1iqb2zweNLWtgPrZ4";

const access_string = `?client_id=${client_id}`;

const first_list = [
  {
    title: "Home",
    icon: HomeIcon,
    route: "/home",
  },
  {
    title: "Profile",
    icon: PersonIcon,
    route: "profile",
  },
];

const second_list = [
  {
    title: "Favourite",
    icon: CategoryIcon,
    route: "favourite",
  },
];
const third_list = [
  { title: "About", icon: InfoIcon, route: "about" },
  { title: "Settings", icon: SettingsIcon, route: "settings" },
  { title: "Signout", icon: ExitToAppIcon, route: "/" },
];

export { baseurl, access_string, first_list, second_list, third_list };
