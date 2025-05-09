import React from "react";
import { AppProvider, DashboardLayout, type Navigation } from "@toolpad/core";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

const NAVIGATION: Navigation = [
  {
    segment: "",
    title: "Users",
    icon: <PeopleAltOutlinedIcon />,
  },
];

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AppProvider navigation={NAVIGATION}>
      <DashboardLayout
        branding={{
          title: "UserHub",
          homeUrl: "/",
          logo: false,
        }}
      >
        {children}
      </DashboardLayout>
    </AppProvider>
  );
};

export default Layout;
