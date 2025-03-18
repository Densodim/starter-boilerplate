import { DashboardOutlined } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import {
  DotChartOutlined,
  FundOutlined,
  PlusCircleOutlined,
  FileTextOutlined,
  SafetyOutlined,
  StopOutlined,
} from "@ant-design/icons";

const dashBoardNavTree = [
  {
    key: "dashboards",
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: "sidenav.dashboard",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "dashboards-default",
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: "sidenav.dashboard.default",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "dashboards-analytic",
        path: `${APP_PREFIX_PATH}/dashboards/analytic`,
        title: "sidenav.dashboard.analytic",
        icon: DotChartOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "dashboards-sales",
        path: `${APP_PREFIX_PATH}/dashboards/sales`,
        title: "sidenav.dashboard.sales",
        icon: FundOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const extraNavTree = [
  {
    key: "extra",
    path: `${APP_PREFIX_PATH}/pages`,
    title: "sidenav.pages",
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "extra-pages",
        path: `${APP_PREFIX_PATH}/pages`,
        title: "sidenav.pages",
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "extra-pages-profile",
            path: `${APP_PREFIX_PATH}/pages/profile`,
            title: "sidenav.pages.profile",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "extra-pages-list",
            path: `${APP_PREFIX_PATH}/pages/user-list`,
            title: "sidenav.pages.userlist",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "extra-pages-invoice",
            path: `${APP_PREFIX_PATH}/pages/invoice`,
            title: "sidenav.pages.invoice",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "extra-auth",
        path: `${APP_PREFIX_PATH}`,
        title: "sidenav.authentication",
        icon: SafetyOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "extra-auth-login-1",
            path: `${APP_PREFIX_PATH}/login-1`,
            title: "sidenav.authentication.login.1",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "extra-auth-login-2",
            path: `${APP_PREFIX_PATH}/login-2`,
            title: "sidenav.authentication.login.2",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "extra-auth-register-1",
            path: `${APP_PREFIX_PATH}/register-1`,
            title: "sidenav.authentication.register.1",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "extra-auth-register-2",
            path: `${APP_PREFIX_PATH}/register-2`,
            title: "sidenav.authentication.register.2",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "extra-auth-forgot-password",
            path: `${APP_PREFIX_PATH}/forgot-password`,
            title: "sidenav.authentication.forgetPassword",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "extra-errors",
        path: `${APP_PREFIX_PATH}/error-1`,
        title: "sidenav.errors",
        icon: StopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "extra-errors-error-1",
            path: `${APP_PREFIX_PATH}/error-1`,
            title: "sidenav.errors.error.1",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "extra-errors-error-2",
            path: `${APP_PREFIX_PATH}/error-2`,
            title: "sidenav.errors.error.2",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree, ...extraNavTree];

export default navigationConfig;
