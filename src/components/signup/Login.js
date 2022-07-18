import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import HomeIcon from "@mui/icons-material/Home";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { API } from "../../App";

export function Login() {
  const navigate = useNavigate();

  const formvalidate = yup.object({
    temuser: yup
      .string()
      .required("plz fill this")
      .min(2, "plz give bigger name")
      .max(59),
    temail: yup
      .string()
      .required("this field is required")
      .min(3, "plz give valid Email")
      .max(36, "too long EmailId")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address"
      ),
    tempass: yup
      .string()
      .required("this is needy")
      .min(2)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        `Must contain
       one uppercase,
       lowercase, 
       number,special character`
      ),
    temem: yup.string().required("fill this").min(2),
    temphone: yup.string().required("complete it").min(2),
    temadd: yup.string().required("complete it").min(2).max(36),
  });

  const { handleChange, handleSubmit, values, errors, handleBlur, touched } = useFormik({
    initialValues: {
      temuser: "",
      temail: "",
      tempass: "",
      temem: "",
      temphone: "",
      temadd: "",
    },
    validationSchema: formvalidate,
    onSubmit: (values) => {
      signupsuccess(values);
    },
  });

  const signupsuccess = async (event) => {
    try {
      const fet = await fetch(`${API}/signup`, {
        method: "POST",
        body: JSON.stringify({
          username: values.temuser,
          email: values.temail,
          password: values.tempass,
          employeid: values.temem,
          phone: values.temphone,
          address: values.temadd,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (fet.status === 400 || !fet || fet.status === 404) {
        window.alert("Try New Username");
      } else {
        window.alert("successful login");
        navigate("/Sigin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="login-btns">
        <Fab
          variant="extended,contained"
          color="success"
          sx={{ margin: "3% 6%", width: "12rem" }}
          onClick={() => {
            navigate("/");
          }}
        >
          User sign up
        </Fab>

        <Fab
          variant="extended,contained"
          color="primary"
          sx={{ margin: "3% 6%", width: "12rem" }}
          onClick={() => {
            navigate("/Admin");
          }}
        >
          Admin login
        </Fab>
      </div>
      <div className="login-input">
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            required
            id="outlined-requireds"
            label="User ID"
            name="temuser"
            value={values.temuser}
            error={errors.temuser && touched.temuser}
            helperText={errors.temuser && touched.temuser ? errors.temuser : ``}
            onChange={handleChange}
            onBlur={handleBlur}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }} />
          <TextField
            required
            id="outlined-password-input"
            label="E-mail Id"
            type="email"
            name="temail"
            error={errors.temail && touched.temail}
            value={values.temail}
            onChange={handleChange}
            helperText={errors.temail && touched.temail ? errors.temail : ``}
            onBlur={handleBlur}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon />
                </InputAdornment>
              ),
            }} />

          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            value={values.tempass}
            name="tempass"
            error={errors.tempass && touched.tempass}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={errors.tempass && touched.tempass ? errors.tempass : ``}
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenIcon />
                </InputAdornment>
              ),
            }} />

          <TextField
            required
            id="outlined-password-input"
            label="Employe id"
            name="temem"
            error={errors.temem && touched.temem}
            value={values.temem}
            onChange={handleChange}
            helperText={errors.temem && touched.temem ? errors.temem : ``}
            onBlur={handleBlur}
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PermIdentityIcon />
                </InputAdornment>
              ),
            }} />

          <TextField
            required
            id="outlined-password-input"
            label="Phone Number"
            value={values.temphone}
            error={errors.temphone && touched.temphone}
            helperText={errors.temphone && touched.temphone ? errors.temphone : ``}
            onChange={handleChange}
            name="temphone"
            onBlur={handleBlur}
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MobileScreenShareIcon />
                </InputAdornment>
              ),
            }} />

          <TextField
            required
            id="outlined-password-input"
            label="Address"
            name="temadd"
            value={values.temadd}
            onChange={handleChange}
            error={errors.temadd && touched.temadd}
            helperText={errors.temadd && touched.temadd ? errors.temadd : ``}
            onBlur={handleBlur}
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon />
                </InputAdornment>
              ),
            }} />

          <Button type="submit">Sign up</Button>
          <hr></hr>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/Sigin");
            }}
            sx={{ marginBottom: "2%" }}
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
