import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { CardMedia, Stack } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import moment from "moment";

import Logo from "../Images/Rectangle.jpg";
import { useNavigate } from "react-router-dom";
type Props = {
  length: any;
  index: any;
  item: any;
};

export default function TripBox({ length, index, item }: Props) {
  let i = true;
  const navigate = useNavigate();
  const handleClickToTrip = () => {
    navigate(`/trip/${item._id}`);
  };

  // console.log(item);

  const currentDate = Date.now();
  const isOld = new Date(item?.overview.startDate).getTime() > currentDate;

  return (
    <Box
      sx={{
        flexGrow: 1,
        "& .css-hip9hq-MuiPaper-root-MuiAppBar-root": {
          // bgcolor: index < length - 1 ? "#FFFFFF" : "#D8D8D8",
          color: "#000000",
          cursor: "pointer",
        },
        "& .css-hglhb7-MuiStack-root": {
          //   bgcolor: "#A78A48",
          borderRadius: "7px",
        },
        borderRadius: "7px",
      }}
    >
      <AppBar
        position="static"
        sx={{
          borderRadius: "7px",
          bgcolor: isOld ? "#FFFFFF" : "#D8D8D8",
          color: "#000",
          cursor: "pointer",
        }}
      >
        <Toolbar
          sx={{
            borderRadius: "7px",
          }}
        >
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "0.9rem 0rem",
            }}
            onClick={handleClickToTrip}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <CardMedia
                sx={{ width: "60px", height: "60px", borderRadius: "200px" }}
                component="img"
                image={item.overview.image ? item.overview.image : Logo}
                alt="Paella dish"
              />
              <Typography>{item.overview.title}</Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={4}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              {index < length - 1 && (
                <Typography
                  sx={{
                    bgcolor: "#A78A48",
                    color: "white",
                    fontSize: "13px",
                    fontWeight: 600,
                    padding: "0.2rem 0.3rem",
                    borderRadius: "3px",
                  }}
                >
                  Upcoming
                </Typography>
              )}
              <Stack
                direction="column"
                sx={{ alignItems: "center", justifyContent: "center" }}
              >
                <Typography>
                  {moment(item.overview.startDate).format("dddd").slice(0, 3)}
                </Typography>
                <Typography>
                  {moment(item.overview.startDate).format("MMM Do YY")}
                </Typography>
              </Stack>
              <ArrowRightAltIcon />
              <Stack
                direction="column"
                sx={{ alignItems: "center", justifyContent: "center" }}
              >
                <Typography>
                  {moment(item.overview.endDate).format("dddd").slice(0, 3)}
                </Typography>
                <Typography>
                  {moment(item.overview.endDate).format("MMM Do YY")}
                </Typography>
              </Stack>
              <KeyboardArrowRightIcon />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
