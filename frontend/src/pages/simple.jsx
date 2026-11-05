const simple = () => {
  let token = localStorage.getItem("token");
  let Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };
  let Login = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "123456");
    localStorage.setItem("username", "rahim");
  };
  let Register = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "123456");
    localStorage.setItem("username", "akash");
  };

  let username = localStorage.getItem("username");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1>My Logo</h1>
      <div className="">
        {token ? (
          <div className="">
            <p>Welcome, {username}!</p>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <div className="">
            <button onClick={Login}>Login</button>
            <button onClick={Register}>Register</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default simple;
