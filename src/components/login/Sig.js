import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { API } from "../../App";

export function Sig() {
  const navigate = useNavigate();

 

  const Insubmit = async (event) => {
    const fet = await fetch(`${API}/sigin`, {
      method: "POST",
      body: JSON.stringify({
        username: values.temuser,
        password: values.tempass,
      }),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    if (fet.status === 400 || !fet) {
      window.alert("Invalid credentials");
    } else {
      localStorage.setItem("username", values.temuser);
      window.alert("successfull login");
      navigate("/Dashboard");
    }
  };

  const formvalidationSchema = yup.object({
    temuser: yup.string().required("UserName is required ⚠️"),

    tempass: yup.string().required("Password is required ⚠️"),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        temuser: "",
        tempass: "",
      },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
        Insubmit(values);
        
      },
    });

  return (
    <div className="sig">
      <h2>SIGN IN</h2>

      <form className="form" onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required"
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
          }}
        />

        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          name="tempass"
          value={values.tempass}
          error={errors.tempass && touched.tempass}
          helperText={errors.tempass && touched.tempass ? errors.tempass : ``}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="current-password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOpenIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button type="submit">sign in</Button>
      </form>
    </div>
  );
}
