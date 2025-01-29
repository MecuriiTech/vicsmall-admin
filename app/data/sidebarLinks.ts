import {
  AccountBalanceWalletOutlined,
  DashboardOutlined,
  Inventory2Outlined,
  LocalShippingOutlined,
  LogoutOutlined,
  PeopleOutlineOutlined,
  PersonOutlined,
  RateReviewOutlined,
  ShoppingBagOutlined,
  StorefrontOutlined,
} from "@mui/icons-material";

export const sidebarLinks = [
  {
    id: 0,
    label: "Dashboard",
    href: "/",
    icon: DashboardOutlined,
  },
  {
    id: 1,
    label: "Products",
    href: "/products",
    icon: Inventory2Outlined,
  },
  {
    id: 2,
    label: "Orders",
    href: "/orders",
    icon: ShoppingBagOutlined,
  },
  {
    id: 3,
    label: "Vendors",
    href: "/vendors",
    icon: StorefrontOutlined,
  },
  {
    id: 4,
    label: "Admins",
    href: "/admins",
    icon: PeopleOutlineOutlined,
  },
  {
    id: 5,
    label: "Shipping",
    href: "/shipping",
    icon: LocalShippingOutlined,
  },
  {
    id: 6,
    label: "Reviews",
    href: "/reviews",
    icon: RateReviewOutlined,
  },
  {
    id: 7,
    label: "Payment",
    href: "/payment",
    icon: AccountBalanceWalletOutlined,
  },
  {
    id: 8,
    label: "Profile",
    href: "/profile",
    icon: PersonOutlined,
  },
  {
    id: 9,
    label: "Logout",
    href: "/logout",
    icon: LogoutOutlined,
  },
];

export default sidebarLinks;
