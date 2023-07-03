import * as React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import Dialog from "@mui/material/Dialog";
import CustomButton from "../../Molecules/Custom Button/CustomButton";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import CustomInput from "../../Molecules/Custom Input/CustomInput";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Style from "./SignUp.module.css";
import CustomSelect from "../../Molecules/Custom Select/CustomSelect";


import { NameValidation } from "../../Helper/Name Validations/NameValidations";
import { NumberValidation } from "../../Helper/Number Validations/NumberValidations";
import { useRecoilState } from "recoil";
import { LoginState } from "../../Recoil State/Login State/LoginState"
import { yearArray, monthArray, dateArray } from "../../Fixtures/dateBirth"
import PasswordValidations from "../../Helper/Password Validations/PasswordValidations";
import { EmailValidation } from "../../Helper/Email Validations/EmailValidations";
export default function SignUp() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showing, setShowing] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [allUserDetails, setAllUserDetails] = useState([]);
  const[islogin ,setIsLogin] =useRecoilState(LoginState)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("UsersDetails")) {
      let usersDetails = JSON.parse(localStorage.getItem("UsersDetails"));
      console.log(usersDetails, "i am from local storage data");
      setAllUserDetails(usersDetails);
    }
  }, []);

  function handleNext() {
    setShow(true);
  }

  function passwordShow() {
    if (showing) {
      setShowing(false);
    } else {
      setShowing(true);
    }
  }

  function handleName(e) {
    setName(e.target.value);
    let nameValid = NameValidation(name);
    setNameError(nameValid);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
    let emailValid = EmailValidation(email);
    setEmailError(emailValid);
  }
  function handlePhone(e) {
    setPhone(e.target.value);
    let phoneValid = NumberValidation(phone);
    setPhoneError(phoneValid);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
    let passwordValid = PasswordValidations(password);
    setPasswordError(passwordValid);
  }

  function handleDate(inputDate) {
    setDate(inputDate);
  }
  function handleMonth(inputMonth) {
    setMonth(inputMonth);
  }
  function handleYear(inputYear) {
    setYear(inputYear);
  }

  function showEmailInput() {
    if (!showEmail) setShowEmail(true);
    else setShowEmail(false);
  }

  function handleSubmit() {

    console.log(allUserDetails , "i am local storage all user data coming on clicking submit button")
    const alreadyRegister = allUserDetails.find(x=> x.Email === email && x.Phone === phone)
console.log(alreadyRegister, "i am finded data which is already in local storage")
    if(alreadyRegister){
      alert(`${alreadyRegister.Name} you are already Register You can go to login Page`)
      navigate('/login')
    }else{
    if ((email === "" && phone === "") || password === "" || name === "") {
      alert("Please fill the input box");
    } else if ((emailError && phoneError) || nameError || passwordError) {
      alert(`You have enter wrong details`);
    } else {
      const userData = {
        Name: name,
        Email: email,
        Phone: phone,
        Password: password, 
        DOB: date + " " + month + " " + year,
      };
      // console.log(userData,"i am register data")
      allUserDetails.push(userData);
      setAllUserDetails([...allUserDetails]);
      console.log(allUserDetails, "i am all regsiter user data");
      localStorage.setItem("UsersDetails", JSON.stringify(allUserDetails));
      alert(`${name} successfully registered`)
      setIsLogin(true)
      navigate('/home')
      localStorage.setItem("matchedUser" , JSON.stringify(userData))
    }
  }
}
  return (
    <div>
      <Dialog
        PaperProps={{
          style: {
            borderRadius: 20,
          },
        }}
        open={true}
      >
        <div className={Style.container}>
          <TwitterIcon
            className={Style.icon}
            fontSize="large"
            sx={{ color: "#00acee" }}
          />
          {show ? (
            <>
              <div className={Style.mainNextContainer}>
                <div className={Style.nextContainer}>
                  <h1 className={Style.heading}>Create your account</h1>
                  <CustomInput
                    className={
                      nameError ? Style.inputUser : Style.inputUserName
                    }
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleName}
                  />
                  <span className={Style.error}>{nameError}</span>
                  {showEmail ? (
                    <>
                      <CustomInput
                        className={
                          emailError ? Style.inputUser : Style.inputUserName
                        }
                        type="text"
                        value={email}
                        onChange={handleEmail}
                        placeholder="Email"
                      />
                      <span className={Style.error}>{emailError}</span>
                    </>
                  ) : (
                    <>
                      <CustomInput
                        className={
                          phoneError ? Style.inputUser : Style.inputUserName
                        }
                        type="text"
                        value={phone}
                        onChange={handlePhone}
                        placeholder="Phone Number"
                      />
                      <span className={Style.error}>{phoneError}</span>
                    </>
                  )}
                  <span onClick={showEmailInput} className={Style.ForgotText}>
                    {showEmail
                      ? "Use Phone Number Instead "
                      : " Use Email Instead"}
                  </span>
                  <span className={Style.ForgotText}></span>
                  <span>
                    <CustomInput
                      value={password}
                      onChange={handlePassword}
                      className={
                        passwordError ? Style.inputUser : Style.inputUserName
                      }
                      type={showing ? "text" : "password"}
                      placeholder="Password"
                    />

                    {/*for the icon of password*/}
                    {password ? (
                      showing ? (
                        <AiOutlineEye
                          onClick={passwordShow}
                          style={{ fontSize: "1.5rem" }}
                        />
                      ) : (
                        <>
                          <AiOutlineEyeInvisible
                            onClick={passwordShow}
                            style={{ fontSize: "1.5rem" }}
                          />
                        </>
                      )
                    ) : (
                      ""
                    )}
                  </span>
                  <span className={Style.error}>{passwordError}</span>
                  <div className={Style.dobContainer}>
                    <span className={Style.maindobText}>Date of birth</span>
                    <span className={Style.dobText}>
                      This will not be shown publicly. Confirm your own age,
                      even if this account is for a business, a pet, or
                      something else.
                    </span>
                  </div>
                  <div className={Style.selectBox}>
                    <CustomSelect
                      className={Style.select}
                      data={dateArray}
                      handleSelect={handleDate}
                      defaultOption="Date"
                    />
                    <CustomSelect
                      className={Style.select}
                      data={monthArray}
                      handleSelect={handleMonth}
                      defaultOption="Month"
                    />
                    <CustomSelect
                      className={Style.select}
                      data={yearArray}
                      handleSelect={handleYear}
                      defaultOption="Year"
                    />
                  </div>
                </div>

                <CustomButton
                  onClick={handleSubmit}
                  className={
                    password && name && (email || phone)
                      ? Style.btnLogin
                      : Style.btnLoginDisable
                  }
                  buttonText="Sign up"
                />
              </div>
            </>
          ) : (
            <>
              <h1 className={Style.heading}>Join Twitter today</h1>
              <CustomButton
                className={Style.btn}
                buttonText="Sign in with Google"
                icon={<FcGoogle />}
              />
              <CustomButton
                className={Style.btn}
                buttonText="Sign in with Apple"
                icon={<BsApple />}
              />
              <span>
                __________<sub className={Style.or}> or </sub>
                __________
              </span>

              <CustomButton
                className={Style.btnNext}
                onClick={handleNext}
                buttonText="Create Account"
              />
              <span className={Style.termsCondition}>
                By signing up, you agree to the{" "}
                <a href="https://twitter.com/en/tos" target="blank">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="https://twitter.com/en/privacy" target="blank">
                  Privacy Policy
                </a>
                , including{" "}
                <a
                  href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
                  target="blank"
                >
                  Cookie Use
                </a>
                .
              </span>
            </>
          )}
          <p>
            Have an account already?{" "}
            <Link className={Style.link} to="/">
              Log in{" "}
            </Link>
          </p>
        </div>
      </Dialog>
    </div>
  );
}
