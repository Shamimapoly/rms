import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import api from "../lib/axios";

const Login = () => {
  // state:
  const [form, setForm] = useState({ email: "", password: "" });
  let onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    console.log(form);
  };

  const login = useMutation({
    mutationFn: async ({ email, password }) => {
      const { data } = await api.post("/auth/login", {
        email: email,
        password: password,
      });
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
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
        <input type="email" name="email" onChange={onChange} />
        <br />
        <br />
        <input type="password" name="password" onChange={onChange} />
        <br />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
