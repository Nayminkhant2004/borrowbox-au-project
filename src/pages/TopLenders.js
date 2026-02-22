import Navbar from "../components/Navbar";
import { Container, Typography, Card, CardContent, List, ListItem, ListItemText, Avatar } from "@mui/material";
import { topLenders } from "../services/data";

export default function TopLenders() {
  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          🏆 Monthly Top 10 Lenders
        </Typography>

        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <List>
              {topLenders.map((lender, index) => (
                <ListItem key={lender.name}>
                  <Avatar sx={{ marginRight: 2 }}>{index + 1}</Avatar>
                  <ListItemText
                    primary={lender.name}
                    secondary={`Items Lent: ${lender.itemsLent}`}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}