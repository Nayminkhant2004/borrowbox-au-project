import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const user = {
    name: "Andrei",
    credits: 50,
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          BorrowBox
        </Typography>

        <Typography sx={{ marginRight: 3 }}>
          Credits: {user.credits}
        </Typography>
        <Button color="inherit" onClick={() => navigate("/history")}>History</Button>
        <Button color="inherit" onClick={() => navigate("/top-lenders")}>Top Lenders</Button>
        <Button color="inherit" onClick={() => navigate("/location")}>Location</Button>

        <Button color="inherit" onClick={() => navigate("/dashboard")}>Dashboard</Button>
        <Button color="inherit" onClick={() => navigate("/items")}>Items</Button>
        <Button color="inherit" onClick={() => navigate("/my-items")}>Your Items</Button>
        <Button color="inherit" onClick={() => navigate("/requests")}>Requests</Button>
        <Button color="inherit" onClick={() => navigate("/profile")}>Profile</Button>
      </Toolbar>
    </AppBar>
  );
}