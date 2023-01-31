import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "./Firebase";
import { AuthProvider } from "./contexts/AuthContext";
import { CssBaseline } from "@mui/material";
// HOMEPAGE
import Home from "./home/home";

// Lawyer'S PAGES
import LawyerSignup from "./lawyer/Signup";
import LawyerSignin from "./lawyer/Signin";

// Client'S PAGES
import ClientSignup from "./client/Signup";
import ClientSignin from "./client/Signin";
import ClientDashboard from "./client/dashboard/Dashboard";
import ClientProfile from "./client/Profile";
import CompleteDetails from "./client/dashboard/Completedetails";
// ADMIN'S PAGES
import AdminSignin from "./admin/signin";



const App = () => {
  const [user, setUser] = useState("");

  //SETTING THE USER IF HE IS AUTHENTICATED
  const authlistener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authlistener();
  }, []);

  return (
    <>
      {user ? (
        // ROUTES AVAILABLE IF THE USER IS AUTHENTICATED
        <>
          <CssBaseline>
            <Router>
              <AuthProvider>
              <Switch>
                <Route exact path="/" component={Home} />

                {/* Lawyer Pages */}
                <Route exact path="/lawyersignup" component={LawyerSignup} />
                <Route exact path="/lawyersignin" component={LawyerSignin} />

                {/* Client Pages */}
                <Route
                  exact
                  path="/clientsignup"
                  component={ClientSignup}
                />
                <Route
                  exact
                  path="/clientsignin"
                  component={ClientSignin}
                />
                <Route
                    exact
                    path="/client/dashboard"
                    component={ClientDashboard}
                  />
                  <Route
                    exact
                    path="/client/completedetails"
                    component={CompleteDetails}
                  />
                  <Route
                    exact
                    path="/client/profile"
                    component={ClientProfile}
                  />

                {/* Admin Pages */}
                <Route exact path="/adminsignin" component={AdminSignin} />
              </Switch>
              </AuthProvider>
            </Router>
          </CssBaseline>
    </>
  ) : (
    // ROUTES AVAILABLE IF THE USER IS NOT AUTHENTICATED
    <>
    <CssBaseline>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lawyersignup" component={LawyerSignup} />
          <Route exact path="/lawyersignin" component={LawyerSignin} />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/clientsignup"
            component={ClientSignup}
          />
          <Route
            exact
            path="/clientsignin"
            component={ClientSignin}
          />
          <Route exact path="/adminsignin" component={AdminSignin} />
        </Switch>
      </Router>
    </CssBaseline>
  </>
)}
</>
);
};

export default App;
