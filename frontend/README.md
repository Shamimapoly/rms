@tanstack/react-query


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
      console.log(data.token);
      localStorage.setItem("token", data.token);
    },
    onError: (error) => {
      console.log(error);
      console.log(error.message);
    },
  });
