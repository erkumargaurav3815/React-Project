// import React from "react";
import { Typography, Container, Button, Paper, Link } from "@mui/material";
// import UserData from "../Components/Data/UserData";

import AddCircleIcon from "@mui/icons-material/AddCircle";
function Home() {
  return (
    <>
      {/* <UserData /> */}
      <Container sx={{ mt: 5 }}>
        <Paper
          elevation={4}
          sx={{
            p: 5,
            borderRadius: 3,
            color: "white",
            background: "linear-gradient(135deg,#1565c0,#42a5f5)",
          }}>
          <Typography variant="h3">Manage Your Time Easily</Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Track working hours, update timesheets, and monitor your
            productivity from one place.
          </Typography>

          <Link href="/timeSheet">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddCircleIcon />}
              sx={{ mt: 3 }}>
              Create Timesheet
            </Button>
          </Link>
        </Paper>
      </Container>
    </>
  );
}

export default Home;
