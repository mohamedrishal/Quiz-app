import React, { useState } from "react";
import { Link } from "react-router-dom";
import "animate.css";


import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import TextField from "@mui/material/TextField";

function Entry({ check, change, setCollect }) {
  const [data, setData] = useState({
    name: "",
    categorie: "",
  });

  setCollect(data);



  // MUI theme
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  // selection
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setData({ ...data, categorie: event.target.value });
  };

  return (
    <div>
      {/* Nav */}
      <nav class="navbar bg-body-tertiary ">
        <div class="container ">
          <div class="navbar-brand ms-auto">
            <FormGroup>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    onChange={change}
                    checked={check}
                    sx={{ m: 1 }}
                  />
                }
                // label="MUI switch"
              />
            </FormGroup>
          </div>
        </div>
      </nav>

      <div
        style={{ height: "80vh" }}
        className="d-flex justify-content-center align-items-center container-fluid"
      >
        <div
          style={{ height: "26rem", width: "50rem", borderRadius: "15px 50px" }}
          className="animate__animated animate__lightSpeedInRight border border-primary corners p-4 shadow-lg "
        >
          <div className="text-center">
            <h1 className={`mt-4`}>
              Qui<span className="text-primary">zApp</span>
            </h1>
          </div>

          {/* form */}
          <form>
            <div className=" d-flex align-items-center  flex-column mt-3 ">
              <div className="w-75">
                <TextField
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className="w-100"
                  id="standard-basic"
                  label="Enter Your Name"
                  variant="standard"
                />
              </div>

             
              <div className="mt-4 ">
              <h5 className="text-center mb-3">Select Category</h5>

                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                  className="text-bolder"
                >
                  <ToggleButton value="history" className="px-3"><i class="fa-solid fa-landmark me-2"></i> History</ToggleButton>
                  <ToggleButton value="science" className="px-3"><i class="fa-solid fa-flask me-2"></i> Science</ToggleButton>
                  <ToggleButton value="IT" className="px-5" ><i class="fa-solid fa-computer   me-2"></i>IT</ToggleButton>
                </ToggleButtonGroup>
              </div>

              <div className="m-5 w-25">

                {data?.name?.length > 0 && data?.categorie?.length > 0 ? (
                  <Link
                    className="text-decoration-none text-white"
                    to={`/home`}
                  >
                    <button
                      variant="contained"
                      className="btn btn-primary w-100"
                      type="submit"
                    >
                      START
                    </button>
                  </Link>
                ) : (
                  <Link
                    className="text-decoration-none text-white"
                    to={``}
                  >
                    <button
                      variant="contained"
                      disabled
                      className="btn btn-primary w-100"
                      type="submit"
                    >
                      START
                    </button>
                  </Link>
                )}
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Entry;
