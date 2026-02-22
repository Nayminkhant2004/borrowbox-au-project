import { Typography, Container, Card, CardContent, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Dashboard() {
  const navigate = useNavigate();

  const user = {
    name: "Andrei",
    credits: 50,
  };

  return (
    <Container style={{ marginTop: "40px" }}>
      <Typography variant="h4">Welcome, {user.name}</Typography>

      <Card style={{ marginTop: "20px", background: "#e3f2fd" }}>
        <CardContent>
          <Typography variant="h6">Your Credits</Typography>
          <Typography variant="h3">{user.credits}</Typography>
          <Typography>Earn credits by lending items!</Typography>
        </CardContent>
      </Card>

      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item>
          <Button variant="contained" onClick={() => navigate("/items")}>
            Browse Items
          </Button>
        </Grid>

        <Grid item>
          <Button variant="outlined" onClick={() => navigate("/add-item")}>
            Add Item
          </Button>
        </Grid>

        <Grid item>
          <Button variant="outlined" onClick={() => navigate("/requests")}>
            Borrow Requests
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}