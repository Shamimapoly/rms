<!-- mutation : backend change korte caile (post,put,patch.delete) -->

import api from "../lib/axios";

mutationFn: async ({ email, password }) => {
const { data } = await api.put("/auth/login", { email, password });
return data;
},
onSuccess: (data) => {
setToken(data.token); // save the localhost token
navigate("/profile");
},

    <!-- query : backend get request olny -->

import { useQuery } from "@tanstack/react-query";

     const { data, isLoading, isError, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await api.get("/vvv");
      return data;
    },

});
