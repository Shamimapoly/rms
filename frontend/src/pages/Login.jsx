import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import api from "../lib/axios";

const Login = () => {
  // state:
  const [form, setForm] = useState({ email: "", password: "", username: "" });
  let onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    console.log(form);
  };

  const login = useMutation({
    mutationFn: async ({ email, password, username }) => {
      const { data } = await api.post("/auth/register", {
        email: email,
        password: password,
        userName: username,
      });
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      console.log(data.token);
      localStorage.setItem("token", data.token);
    },
    onError: (error) => {
      console.log(error);
      console.log(error.message);
    },
  });

  let onSubmit = (e) => {
    e.preventDefault();
    login.mutate(form);
  };

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <h2>email</h2>
        <input type="email" name="email" onChange={onChange} />
        <br />
        <br />
        <h2>password</h2>
        <input type="password" name="password" onChange={onChange} />
        <br />
        <br />
        <h2>username</h2>
        <input type="text" name="username" onChange={onChange} />
        <br />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Login;
