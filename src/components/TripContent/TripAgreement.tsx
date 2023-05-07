import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useAppSelector } from "../../Features/storeHook";
import { Link } from "react-router-dom";

type Props = {};

const TripAgreement = (props: Props) => {
  const { singleTrip } = useAppSelector((state) => state.trips);

  return (
    <>
      {" "}
      {singleTrip?.agreements?.map((item: any, index: any) => {
        return (
          <AppBar
            key={index}
            position="static"
            sx={{
              borderRadius: "7px",
              bgcolor: "#F8F8F8",
              color: "black",
              margin: "0rem 0 0.9rem 0",
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
              >
                <Stack
                  direction="column"
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "12px",
                        sm: "16px",
                        md: "16px",
                      },
                      fontWeight: 400,
                    }}
                  >
                    {item?.title}
                  </Typography>
                </Stack>
                <Stack
                  direction="column"
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor:
                      item?.status === "Not Signed" ? "#E73B151A" : "#1F70031A",
                    padding: "0.13rem 0.3rem",
                    borderRadius: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      color:
                        item?.status === "Not Signed" ? "#E73B15" : "#1F7003",
                      fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "12px",
                      },
                    }}
                  >
                    {item?.status}
                  </Typography>
                </Stack>
                <Stack
                  direction="column"
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#F8F8F8",
                    color: "#969696",
                    cursor: "pointer",
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: "#fff",
                      padding: "0.1rem 0.2rem",
                      fontSize: {
                        xs: "12px",
                        sm: "144px",
                        md: "14px",
                      },
                    }}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        fontSize: "inherit",
                        fontWeight: 400,
                      }}
                      to={`${
                        item?.document_link.startsWith("https://") ||
                        item?.document_link.startsWith("http://")
                          ? item.document_link
                          : "https://" + item.document_link
                      }`}
                      target="_blank"
                    >
                      View Document
                    </Link>

                    <NorthEastIcon sx={{ fontSize: "15px", fontWeight: 400 }} />
                  </Stack>
                </Stack>
              </Stack>
            </Toolbar>
          </AppBar>
        );
      })}
    </>
  );
};

export default TripAgreement;
