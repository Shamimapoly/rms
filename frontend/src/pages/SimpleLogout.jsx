const SimpleLogout = () => {
  let logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("Name");
  };
  return (
    <div>
      SimpleLogout
      <button onClick={logout}>Logout Button</button>
    </div>
  );
};

export default SimpleLogout;
