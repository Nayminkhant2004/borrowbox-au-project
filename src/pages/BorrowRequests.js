import { Container, Typography, Card, CardContent, Button, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
export default function BorrowRequests() {
  const requests = [
    { id: 1, item: "Drill", borrower: "John", status: "Pending" },
    { id: 2, item: "Calculator", borrower: "Emma", status: "Approved" },
  ];

  return (
    <Container style={{ marginTop: "40px" }}>
      <Typography variant="h4">Borrow Requests</Typography>

      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        {requests.map((req) => (
          <Grid item xs={12} md={6} key={req.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{req.item}</Typography>
                <Typography>Borrower: {req.borrower}</Typography>
                <Typography>Status: {req.status}</Typography>

                {req.status === "Pending" && (
                  <>
                    <Button variant="contained" style={{ marginRight: "10px" }}>
                      Approve (+10 credits)
                    </Button>
                    <Button variant="outlined">Reject</Button>
                  </>
                )}

                {req.status === "Approved" && (
                  <Button variant="contained">
                    Mark Returned (+5 credits)
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}