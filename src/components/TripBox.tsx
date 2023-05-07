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
              padding: {
                xs: "0.4rem 0rem",
                sm: "0.7rem 0rem",
                md: "0.9rem 0rem",
              },
            }}
            onClick={handleClickToTrip}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <CardMedia
                sx={{
                  width: {
                    xs: "30px",
                    sm: "60px",
                    md: "60px",
                  },
                  height: {
                    xs: "30px",
                    sm: "60px",
                    md: "60px",
                  },
                  borderRadius: "200px",
                }}
                component="img"
                image={item.overview.image ? item.overview.image : Logo}
                alt="Paella dish"
              />
              <Typography
                sx={{
                  fontSize: {
                    xs: "11px",
                    sm: "15px",
                    md: "16px",
                  },
                  fontWeight: 600,
                }}
              >
                {item.overview.title}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={{
                xs: 1,
                sm: 3,
                md: 4,
              }}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              {isOld && (
                <Typography
                  sx={{
                    bgcolor: "#A78A48",
                    color: "white",

                    fontSize: {
                      xs: "10px",
                      sm: "13px",
                      md: "13px",
                    },
                    fontWeight: 600,
                    padding: {
                      xs: "0.1rem 0.15rem",
                      sm: "0.2rem 0.3rem",
                      md: "0.2rem 0.3rem",
                    },
                    borderRadius: "3px",
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                >
                  Upcoming
                </Typography>
              )}
              <Stack
                direction={{
                  xs: "column",
                  sm: "column",
                  md: "column",
                }}
                sx={{ alignItems: "center", justifyContent: "center" }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "11px",
                      sm: "15px",
                      md: "16px",
                    },
                  }}
                >
                  {moment(item.overview.startDate).format("dddd").slice(0, 3)}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "11px",
                      sm: "15px",
                      md: "16px",
                    },
                  }}
                >
                  {moment(item.overview.startDate).format("MMM Do YY")}
                </Typography>
              </Stack>
              <ArrowRightAltIcon />
              <Stack
                direction={{
                  xs: "column",
                  sm: "column",
                  md: "column",
                }}
                sx={{ alignItems: "center", justifyContent: "center" }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "11px",
                      sm: "15px",
                      md: "16px",
                    },
                  }}
                >
                  {moment(item.overview.endDate).format("dddd").slice(0, 3)}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "11px",
                      sm: "15px",
                      md: "16px",
                    },
                  }}
                >
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
