"use client";
import React, { useRef } from "react";
import Fab from "@mui/material/Button";
import { TextField, Stack, Box } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { handleSubmit } from "@/lib/serverActions";

export default function ListForm() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <Box
      sx={{
        backgroundColor: "rgb(80, 100, 200)",
        width: "25%",
        paddingBottom: ".75em",
      }}
    >
      <Stack>
        <Stack
          sx={{
            display: "flex",
            border: "none",
            width: "fit-content",
            marginTop: "1em",
            paddingLeft: "1em",
          }}
          direction="column"
        >
          <form
            ref={ref}
            action={async (FormData: FormData) => {
              ref?.current?.reset();
              await handleSubmit(FormData);
            }}
          >
            <TextField
              id="multiline"
              type="text"
              name="content"
              label="I need to"
              sx={{ background: "white" }}
            />
            <Fab
              color="primary"
              aria-label="add"
              type="submit"
              style={{ marginTop: ".5em", marginRight: "1em", color: "blue" }}
            >
              <AddCircleOutlineOutlined />
            </Fab>
          </form>
        </Stack>
      </Stack>
    </Box>
  );
}
