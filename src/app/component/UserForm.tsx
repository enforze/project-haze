"use client";
import { Button, Grid, TextField, Box } from "@mui/material";

export default function UserForm() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const formData = Object.fromEntries(form.entries());

    console.log(formData);

    const res = await fetch("api/users/create", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res.ok) {
      return;
    }

    const result = await res.json();
    console.log(result);
  };

  return (
    <Box
      sx={{
        margin: "1em",
        width: "fit-content",
        paddingLeft: "1em",
        background: "rgb(80, 100, 200)",
        float: "right",
        border: "1px solid grey",
        paddingBottom: "1em",
        paddingTop: "1em",
      }}
    >
      <div style={{ color: "white", paddingBottom: ".2em" }}>Login</div>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          direction={"row"}
          spacing={2}
          columns={{ xs: 1, sm: 2, md: 3 }}
          // backgroundColor {}
        >
          <Grid
            spacing={2}
            direction={{ md: "row", xs: "column" }}
            container
            item
          >
            {/* <Grid item xs={12}>
              <TextField
                label="Name"
                type="text"
                name="name"
                sx={{ background: "white" }}
              />
            </Grid> */}
            <Grid item xs={7}>
              <TextField
                label="Email"
                type="email"
                name="email"
                sx={{ background: "white" }}
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                label="Password"
                type="password"
                name="password"
                sx={{ background: "white" }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
