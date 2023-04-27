import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import LogoFile from "../components/commom-components/LogoFile";
import CompWrapper from "../components/CompWrapper";
import { useAppDispatch, useAppSelector } from "../Features/storeHook";
import { resetSuccessTrue } from "../Features/tripRequest/tripRequestSlice";

type Props = {};

const FinishPage = (props: Props) => {
  const { successRequest } = useAppSelector((state) => state.tripRequests);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(resetSuccessTrue());
  }, [successRequest]);
  return (
    <CompWrapper>
      {" "}
      <Stack
        direction="column"
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <LogoFile
          sx={{
            margin: "2rem auto",
            marginBottom: "3rem",
          }}
        />
        <Box
          sx={{
            width: "50%",
            height: "300px",
            backgroundColor: "#ffffff",
            padding: "2.5rem",
            borderRadius: "7px",
          }}
        >
          <Container>
            <Stack sx={{ textAlign: "center" }}>
              <Typography variant="h3" sx={{ margin: "2rem 0" }}>
                Thank You
              </Typography>
              <Typography sx={{ marginBottom: "1.5rem" }} variant="subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                nunc sit elementum gravida. Massa vel egestas orci elementum.{" "}
              </Typography>
              <Link to={"/"}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#A78A48", "&:hover": { bgcolor: "#A78A69" } }}
                >
                  Done
                </Button>
              </Link>
            </Stack>
          </Container>
        </Box>
      </Stack>
    </CompWrapper>
  );
};

export default FinishPage;
