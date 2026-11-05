const SimpleLoging = () => {
  let Login = () => {
    localStorage.setItem("token", "my token value");
    localStorage.setItem("Name", "Akash");
  };
  return (
    <div>
      Token Set Korbo
      <button onClick={Login}>Login Button</button>
    </div>
  );
};

export default SimpleLoging;
