import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.scss";

const LoginPage = () => {
  const push = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const validator = new SimpleReactValidator({
    className: "errorMessage",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const handleRememberToggle = () => {
    setFormValues({ ...formValues, remember: !formValues.remember });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validator.allValid()) {
      setFormValues({
        email: formValues.email,
        password: formValues.password,
      });
      validator.hideMessages();
      console.log(formValues);

      const { email, password } = formValues;

      // if (email.match(userRegex)) {
      // Use Axios to make a POST request to your endpoint
      axios
        .post("http://localhost:8800/api/auth/login", {
          email,
          password,
        })
        .then((response) => {
          console.log("reach");
          // Handle successful login
          toast.success("You have successfully logged in to Arkio!");
          push("/home4");
        })
        .catch((error) => {
          // Handle login error
          toast.error("Login failed. Please try again.");
        });
    } else {
      validator.showMessages();
      toast.error("Empty fields are not allowed!");
    }
  };

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="E-mail"
                value={formValues.email}
                variant="outlined"
                name="email"
                label="E-mail"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={handleInputChange}
                onChange={handleInputChange}
              />
              {validator.message("email", formValues.email, "required|email")}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Password"
                value={formValues.password}
                variant="outlined"
                name="password"
                type="password"
                label="Password"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={handleInputChange}
                onChange={handleInputChange}
              />
              {validator.message("password", formValues.password, "required")}
            </Grid>
            <Grid item xs={12}>
              <Grid className="formAction">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formValues.remember}
                      onChange={handleRememberToggle}
                    />
                  }
                  label="Remember Me"
                />
                <Link to="/forgot-password">Forgot Password?</Link>
              </Grid>
              <Grid className="formFooter">
                <Button fullWidth className="cBtnTheme" type="submit">
                  Login
                </Button>
              </Grid>
              <Grid className="loginWithSocial">
                <Button className="facebook">
                  <i className="fa fa-facebook"></i>
                </Button>
                <Button className="twitter">
                  <i className="fa fa-twitter"></i>
                </Button>
                <Button className="linkedin">
                  <i className="fa fa-linkedin"></i>
                </Button>
              </Grid>
              <p className="noteHelp">
                Don't have an account?{" "}
                <Link to="/register">Create a free account</Link>
              </p>
            </Grid>
          </Grid>
        </form>
        <div className="shape-img">
          <i className="fi flaticon-honeycomb"></i>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
