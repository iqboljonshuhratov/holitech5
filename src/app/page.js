"use client";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Modal, Button, TextField } from "@mui/material";

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(timer);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <Box className="flex  justify-between items-center justify-between">
      <div className="contend pt-[70px] max-w-[700px] ">
        <Box
          sx={{
            marginBottom: "30px",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid #46c09a",
            borderRadius: 8,
            display: "inline-block",
            width: "286px",
            height: "43px",
            display: "flex",
            justifyContent: "start",
            padding: "0 20px",
            // alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#000000",
              fontSize: 16,
              fontFamily: '"Montserrat", Arial, sans-serif',
              lineHeight: 1.55,
              fontWeight: 500,
            }}
          >
            27-28-fevral | 20:30 UZB
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#000000",
            fontSize: "27px",
            fontFamily: '"Montserrat", Arial, sans-serif',
            // lineHeight: 1.55,
            fontWeight: 700,
            // textAlign: "center", // Agar o‘rtaga joylash kerak bo‘lsa
            border: "solid transparent",
            marginBottom: "60px",
          }}
        >
          TAYYOR 1000$ DAROMAD <span className=" text-red-600">TOPADIGAN</span>{" "}
          KANAL EGASI BO'LING
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontSize: 20,
            fontFamily: '"Montserrat", Arial, sans-serif',
            fontWeight: 500,
            marginBottom: "20px",
          }}
        >
          1 million so'mlik darslik sovg'asiga ega bo'ling
        </Typography>
        <Typography sx={{ marginBottom: "50px", display: "flex", gap: "15px" }}>
          <img
            src="https://optim.tildacdn.one/tild3936-6136-4635-b736-666466363437/-/format/webp/Ellipse_32-min.png"
            alt="img"
          />
          YouTubeda 0 dan qisqa vaqtda o'rganish qadamlarini
        </Typography>
        <Typography sx={{ marginBottom: "20px", display: "flex", gap: "15px" }}>
          <img
            src="https://optim.tildacdn.one/tild3936-6136-4635-b736-666466363437/-/format/webp/Ellipse_32-min.png"
            alt="img"
          />
          YouTubeda soha tanlash va daromadgacha chiqish qadamlarini{" "}
        </Typography>
        <Typography sx={{ marginBottom: "30px", display: "flex", gap: "15px" }}>
          <img
            src="https://optim.tildacdn.one/tild3936-6136-4635-b736-666466363437/-/format/webp/Ellipse_32-min.png"
            alt="img"
          />
          Birinchi 1000$ topish uslublarini o'rganasiz{" "}
        </Typography>
        <div
          className="flex"
          style={{
            fontSize: "38px",
            color: "#000",
            fontWeight: "bold",
            textAlign: "center",
            // padding: "20px",
            marginBottom: "20px",
          }}
        >
          <span>{"0" + minutes}</span>:<span>{seconds}</span>
        </div>
        <div>
          <Box
            className="text-center"
            sx={{ display: "flex", gap: "20px", alignContent: "center" }}
          >
            <Button
              sx={{
                marginBottom: "20px",
                color: "#ffffff",
                width: "321px",
                height: "70px",
                fontSize: "18px",
                fontFamily: `"Montserrat", Arial, sans-serif`,
                lineHeight: 1.55,
                fontWeight: 600,
                borderRadius: "18px",
                backgroundImage:
                  "linear-gradient(0.283turn, rgba(192, 70, 70, 1) 0%, rgba(255, 99, 99, 1) 50%, rgba(192, 70, 70, 1) 100%)",
                borderColor: "transparent",
                borderStyle: "solid",
                transition:
                  "background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out",
                boxShadow: "0px 5px 0px 0px rgba(126, 33, 33, 1)",
                "&:hover": {
                  backgroundImage:
                    "linear-gradient(0.283turn, rgba(172, 50, 50, 1) 0%, rgba(235, 79, 79, 1) 50%, rgba(172, 50, 50, 1) 100%)",
                },
              }}
              onClick={handleOpen}
              variant="contained"
            >
              Ro‘yxatdan o‘tish
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0px",
                alignItems: "start",
                // alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#ff6464",
                  fontSize: 20,
                  fontFamily: "Montserrat, Arial, sans-serif",
                  lineHeight: 1.55,
                  fontWeight: 700,
                  textDecoration: "line-through",
                }}
              >
                999.000 so’m
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  fontSize: 30,
                  fontFamily: "Montserrat, Arial, sans-serif",
                  lineHeight: 1.55,
                  fontWeight: 700,
                  backgroundPosition: "center center",
                  borderColor: "transparent",
                }}
              >
                BEPUL
              </Typography>
            </Box>
          </Box>

          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 450,
                bgcolor: "white",
                boxShadow: 24,
                borderRadius: 2,
                p: 3,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Ro‘yxatdan o‘tish uchun <br /> ma’lumotlaringizni kiriting!
              </Typography>

              <Box
                sx={{
                  bgcolor: "#F9F9F9",
                  p: 3,
                  borderRadius: 2,
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography sx={{ textAlign: "left", fontWeight: 600, mb: 1 }}>
                  Ismingiz
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Ismingizni kiriting"
                  variant="outlined"
                  sx={{
                    mb: 2,
                    bgcolor: "white",
                  }}
                />

                <Typography sx={{ textAlign: "left", fontWeight: 600, mb: 1 }}>
                  Telefon raqamingiz
                </Typography>
                <TextField
                  fullWidth
                  placeholder="+998 90 123 45 67"
                  variant="outlined"
                  sx={{ bgcolor: "white" }}
                />

                <Button
                  fullWidth
                  sx={{
                    mt: 3,
                    bgcolor: "#E75A5A",
                    color: "#ffffff",
                    fontSize: 18,
                    fontWeight: 600,
                    borderRadius: "8px",
                    p: 1.5,
                    "&:hover": {
                      bgcolor: "#d94f4f",
                    },
                  }}
                >
                  DAVOM ETISH
                </Button>
              </Box>
            </Box>
          </Modal>
        </div>
      </div>
      <Box sx={{ width: "407px", height: "488px", padding: "40px 0 0 0" }}>
        <img
          sx={{ width: "407px", height: "auto" }}
          src="https://holitechb.netlify.app/2.png"
          alt="man"
        />{" "}
      </Box>
    </Box>
  );
}
