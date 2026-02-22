import Navbar from "../components/Navbar";
import { Container, Card, CardContent, Typography, Button, Grid, Chip } from "@mui/material";
import { demoItems } from "../services/data";

export default function Items() {
  const handleBorrow = (item) => {
    alert(`Borrow request sent for ${item.title} (-10 credits)`);
  };

  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>Browse Items</Typography>

        <Grid container spacing={3}>
          {demoItems.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>

                  <Chip label={item.category} sx={{ marginY: 1 }} />

                  <Typography variant="body2">Owner: {item.owner}</Typography>
                  <Typography variant="body2">
                    Status: {item.available ? "Available" : "Borrowed"}
                  </Typography>

                  <Button
                    variant="contained"
                    disabled={!item.available}
                    sx={{ marginTop: 2 }}
                    onClick={() => handleBorrow(item)}
                  >
                    Borrow
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}