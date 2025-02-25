import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import footerImg from "./assets/signup-img.svg";
import styles from "./SignUp.module.scss";
// import { useMockUser } from "./hooks/hook";

function Signup() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      username: name,
      company: company,
      password: password,
    };
    axios
      .post("http://scrybe.hng.tech:5000/users/", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {});
  };

  return (
    <>
      <main className={styles.signUpWrapper}>
        <div className={styles.signup}>
          <div className={styles.first}>
            <h1>Create an account</h1>
            <h3>Let’s get you started</h3>

            <form onSubmit={handleSubmit}>
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                className={`${styles.errorInput} `}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {/* <p className={styles.errorMsg}>{errors.first_name?.message}</p> */}

              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                className={`${styles.errorInput} `}
              />
              {/* <p className={styles.errorMsg}>{errors.last_name?.message}</p> */}

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your company email"
                className={`${styles.errorInput} `}
              />
              {/* <p className={styles.errorMsg}>{errors.email?.message}</p> */}

              <label htmlFor="company_name">Company</label>
              <input
                type="text"
                id="company_name"
                placeholder="Enter your company name"
                className={`${styles.errorInput} `}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              {/* <p className={styles.errorMsg}>{errors.company_name?.message}</p> */}

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className={`${styles.errorInput} `}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <p className={styles.errorMsg}>{errors.password?.message}</p> */}

              <input
                type="submit"
                value="Create an account"
                className={`${styles.submitValid}`}
              />
              <div className={`${styles.accept} ${styles.up}`}>
                <input type="checkbox" name="" id="" />
                <span>
                  I have read and agree to{" "}
                  <NavLink to={""}>Terms of Service</NavLink> and{" "}
                  <NavLink to={""}>Privacy Policy</NavLink>
                  <br />
                  Already have an account?{" "}
                  <NavLink to={"/signin"}>Sign in</NavLink>
                </span>
              </div>
            </form>
          </div>
          <div className={styles.second}>
            <img src={footerImg} alt="" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Signup;
