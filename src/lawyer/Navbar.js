import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import firebase from "../Firebase";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Tooltip,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Divider,
  IconButton,
  Typography,
  List,
  Toolbar,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import CreateIcon from "@mui/icons-material/Create";
import Notifications from "./Notifications";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";
import VideocamIcon from "@mui/icons-material/Videocam";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  // OPEN AND CLOSE DRAWER FUNCTIONS
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // SIGN OUT FUNCTION
  const handleSignout = () => {
    firebase.auth().signOut();
    history.push("/#");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* APPBAR */}
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#39ac73" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Hamrowakil (Lawyers)
          </Typography>
        </Toolbar>
      </AppBar>

      {/* LEFT DRAWER */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        {/* LIST OF NAVIGATIONS */}
        <List>
          {/* DASHBOARD */}
          <Link to="/lawyer/dashboard">
          <ListItem button component="a" href="/lawyer/dashboard">
            <Tooltip title="Dashboard" placement="right">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Dashboard</ListItemText>
          </ListItem>
          </Link>

          {/* PROFILE */}
          <Link to="/lawyer/profile">
          <ListItem button component="a" href="/lawyer/profile">
            <Tooltip title="Profile" placement="right">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Profile</ListItemText>
          </ListItem>
          </Link>

          {/* APPOINTMENTS */}
          <Link to="/lawyer/appointments">
          <ListItem button component="a" href="/lawyer/appointments">
            <Tooltip title="Appointments" placement="right">
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Appointments</ListItemText>
          </ListItem>
          </Link>

          {/* YOUR PATIENTS */}
          <Link to="/lawyer/yourclients">
          <ListItem button component="a" href="/lawyer/yourclients">
            <Tooltip title="Your Clients" placement="right">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Your Clients</ListItemText>
          </ListItem>
          </Link>

          {/* NOTIFICATIONS */}
          <Link to="/lawyer/notifications">
          <ListItem button component="a" href="/lawyer/notifications">
            <Tooltip title="Notifications" placement="right">
              <ListItemIcon>
                <Notifications />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Notifications</ListItemText>
          </ListItem>
          </Link>

          {/* SCHEDULED MEETINGS */}
          <Link to="/lawyer/scheduledmeetings">
          <ListItem button component="a" href="/lawyer/scheduledmeetings">
            <Tooltip title="Scheduled Meetings" placement="right">
              <ListItemIcon>
                <VideocamIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Scheduled Meetings</ListItemText>
          </ListItem>
          </Link>

          {/* LATEST UPDATES */}
          <Link to="/lawyer/latestupdates">
          <ListItem button component="a" href="/lawyer/latestupdates">
            <Tooltip title="Latest Updates" placement="right">
              <ListItemIcon>
                <NewspaperIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Latest Updates</ListItemText>
          </ListItem>
          </Link>

          {/* SIGN OUT */}
          <ListItem button onClick={handleSignout}>
            <Tooltip title="Sign Out" placement="right">
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Sign Out</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;

const drawerWidth = 240;

// OPENED DRAWER STYLING
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

// CLOSED DRAWER STYLING
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

// DRAWER HEADER STYLING
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// APPBAR STYLING
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// DRAWER STYLING
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
