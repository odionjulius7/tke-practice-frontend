import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useAppSelector } from "../../Features/storeHook";
import { Link } from "react-router-dom";

type Props = {};

const TripPayment = (props: Props) => {
  const { singleTrip } = useAppSelector((state) => state.trips);

  return (
    <>
      {" "}
      {singleTrip?.payment?.map((item: any, index: any) => {
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
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                >
                  <Typography>{item?.title}</Typography>
                </Stack>
                <Stack
                  direction="column"
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor:
                      item?.status === "Not Paid" ? "#E73B151A" : "#1F70031A",
                    padding: "0.13rem 0.3rem",
                    borderRadius: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      color:
                        item?.status === "Not Paid" ? "#E73B15" : "#1F7003",
                      fontSize: "12px",
                    }}
                  >
                    {item?.status}
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  {item?.amount}
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
                      bgcolor: "#A78A48",
                      color: "#fff",
                      margin: "0.3rem 0",
                      padding: "0.1rem 0.2rem",
                      fontSize: "14px",
                      fontWeight: 400,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`${
                        item?.payment_link.startsWith("https://") ||
                        item?.payment_link.startsWith("http://")
                          ? item.payment_link
                          : "https://" + item.payment_link
                      }`}
                      target="_blank"
                    >
                      Pay Now
                    </Link>
                    <NorthEastIcon sx={{ fontSize: "13px" }} />
                  </Stack>
                  <Stack
                    sx={{
                      color: "#AF9250",
                      fontSize: "12px",
                      fontWeight: 500,
                      bgcolor: "#fff",
                      padding: "0.1rem 0.2rem",
                    }}
                  >
                    {" "}
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`${
                        item?.invoice_link.startsWith("https://") ||
                        item?.invoice_link.startsWith("http://")
                          ? item.invoice_link
                          : "https://" + item.invoice_link
                      }`}
                      target="_blank"
                    >
                      {" "}
                      View Invoice
                    </Link>
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

export default TripPayment;
