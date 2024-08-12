import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import postContext from "../context/post/postContext";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";

export default function Reservation() {
  const context = useContext(postContext);
  const { getReservations, getBookedDates, bookings } = context;
  const navigate = useNavigate();

  const [reservation, setReservation] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    getReservations();
    getBookedDates();
    // eslint-disable-next-line
  }, []);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => ({ ...prev, [name]: value }));
  };

  const reservePost = async (e) => {
    e.preventDefault();
    const { name, email, date, message, startTime, endTime } = reservation;

    if (!startTime || !endTime) {
      toast.error("Start Time and End Time must be provided");
      return;
    }
    if (dayjs(endTime).isBefore(dayjs(startTime))) {
      toast.error("End time must be after start time");
      return;
    }

    const formattedStartTime = dayjs(startTime).format("HH:mm A");
    const formattedEndTime = dayjs(endTime).format("HH:mm A");

    console.log({
      name,
      email,
      message,
      date,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
    });

    let res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/reservations/new`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          date,
          startTime: formattedStartTime,
          endTime: formattedEndTime,
        }),
      }
    );

    let resJson = await res.json();
    console.log(resJson); // Log the response

    if (resJson.errors && resJson.errors.length > 0) {
      resJson.errors.forEach((error) => {
        toast.error(error.msg);
      });
    } else if (resJson.result) {
      toast.success("Reservation Successful");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="pages-bg" style={{ marginTop: "-6rem" }}>
        <div className="bf-container">
          <div className="bf-body">
            <div className="bf-head" style={{ marginBottom: "-2rem" }}>
              <h1 className="h1">Reservation Form</h1>
            </div>
            <form className="bf-body-box" onSubmit={reservePost}>
              <div className="bf-row">
                <div className="bf-col-6">
                  <p className="p-reservation">Your Name</p>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    id="name"
                    value={reservation.name}
                    onChange={inputHandler}
                    placeholder="Your Name"
                  />
                </div>
                <div className="bf-col-6">
                  <p className="p-reservation">Email Address</p>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    id="email"
                    value={reservation.email}
                    onChange={inputHandler}
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="bf-row">
                <div className="bf-col-12">
                  <p className="p-reservation">Select Date</p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Choose date"
                        disablePast
                        value={reservation.date}
                        onChange={(date) =>
                          inputHandler({
                            target: { name: "date", value: date },
                          })
                        }
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>

              <div className="bf-row">
                <div className="bf-col-6">
                  <p className="p-reservation">Start Time</p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <TimePicker
                        value={reservation.startTime}
                        onChange={(startTime) =>
                          inputHandler({
                            target: { name: "startTime", value: startTime },
                          })
                        }
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                <div className="bf-col-6">
                  <p className="p-reservation">End Time</p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <TimePicker
                        value={reservation.endTime}
                        onChange={(endTime) =>
                          inputHandler({
                            target: { name: "endTime", value: endTime },
                          })
                        }
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>

              <div className="bf-row">
                <div className="bf-col-12">
                  <p className="p-reservation">Messages</p>
                  <textarea
                    className="textarea"
                    name="message"
                    id="message"
                    value={reservation.message}
                    onChange={inputHandler}
                    cols="10"
                    rows="2"
                  ></textarea>
                </div>
              </div>

              <div className="bf-row">
                <div className="bf-col-3">
                  <button className="submit" type="submit">
                    Reserve
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
