import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import { UserSignIn } from "../api";
import { loginSuccess } from "../redux/reducers/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;

const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const SignIn = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateInputs = () => {
    if (!email || !password) {
      toast.warn("Please fill in all fields"); // Show a warning toast
      return false;
    }
    return true;
  };

  const handelSignIn = async () => {
    if (!validateInputs()) return; // Validate inputs before making the API request

    setLoading(true);
    setButtonDisabled(true);

    try {
      const res = await UserSignIn({ email, password });
      dispatch(loginSuccess(res.data)); // Dispatch successful login action
      toast.success("Login Successful"); // Show success toast
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed"); // Show error toast
    } finally {
      setLoading(false);
      setButtonDisabled(false);
    }
  };

  return (
    <Container>
      <div>
        <Title>Welcome to Fittrack 👋</Title>
        <Span>Please login with your details here</Span>
      </div>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          handelChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          password
          value={password}
          handelChange={(e) => setPassword(e.target.value)}
        />
        <Button
          text="SignIn"
          onClick={handelSignIn}
          isLoading={loading}
          isDisabled={buttonDisabled}
        />

      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
};

export default SignIn;
