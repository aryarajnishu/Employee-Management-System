import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Our Company</h1>
      <p>This is the home page. Click below to log in.</p>
      <button onClick={() => navigate("/login")} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Login
      </button>
    </div>
  );
};

export default Home;
