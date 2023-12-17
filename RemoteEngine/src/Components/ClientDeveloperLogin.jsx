import React, { useState } from "react";
import {
  Flex,
  Input,
  Divider,
  Heading,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import "../Styles/ClientDeveloper.css";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionClient } from "../Redux/action";
const ClientDeveloperLogin = () => {
  const [clientEmail, setClientEmail] = useState("");
  const [clientPassword, setClientPassword] = useState("");
  const [developerEmail, setDeveloperEmail] = useState("");
  const [developerPassword, setDeveloperPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //Client Login
  const handleClient = async () => {
    let obj = {
      clientEmail,
      clientPassword,
    };

    try {
      dispatch(actionClient(obj));
      toast({
        title: "login Successful",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/developerPage");
    } catch (err) {
      console.log("err", err);
      toast({
        title: "login fail",
        description: "Wrong Crenditials",
        status: "failed",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  //Developer Login
  const handleDeveloper = async () => {
    let obj = {
      developerEmail,
      developerPassword,
    };
    try {
      let res = await axios.post(
        `https://backendapp-ptsw.onrender.com/developers/login`,
        obj
      );
      toast({
        title: "login Successful",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      console.log("err", err);
      toast({
        title: "login fail",
        description: "Wrong Crenditials",
        status: "failed",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box className="mainClientDeveloperLogin">
      <nav className="navbar">
        <a className="navbar_a">Remote Engine</a>
        <ul className="navbar_ul">
          {/* <Link to="/client">
            <li>
              <Button>Client Signup</Button>
            </li>
          </Link> */}
          <Link to="/developerPage">
            <li>
              <Button>Developer Signup</Button>
            </li>
          </Link>
        </ul>
      </nav>
      <Flex
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection={["column", "row", "row"]}
      >
        <Box
          width={["80%"]} // Adjust width for different breakpoints
          maxWidth="800px" // Set a maximum width for larger screens
          padding={["4", "6", "8"]} // Adjust padding for different breakpoints
        >
          <Flex
            justifyContent={["center", "space-between"]}
            flexDirection={["column", "column", "row"]}
          >
            <Box className="clientLogin">
              <Heading className="heading">Client Login</Heading>
              <br />
              <FormControl
                style={{ color: "#fff", backgroundColor: "800" }}
                textAlign={["center", "left"]}
              >
                <FormLabel
                  style={{
                    color: "#fff",
                    backgroundColor: "900",
                  }}
                >
                  Email address
                </FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setClientEmail(e.target.value)}
                />
                <FormHelperText
                  style={{ color: "#fff", backgroundColor: "900" }}
                >
                  We'll never share your email.
                </FormHelperText>
              </FormControl>
              <br />
              <FormControl textAlign={["center", "left"]}>
                <FormLabel
                  style={{
                    color: "#fff",
                    backgroundColor: "800",
                  }}
                >
                  Enter Password
                </FormLabel>
                <Input
                  type="password"
                  onChange={(e) => setClientPassword(e.target.value)}
                />
                <FormHelperText
                  style={{ color: "#fff", backgroundColor: "800" }}
                >
                  Try to make a secure password
                </FormHelperText>
              </FormControl>
              <br />
              <Divider />
              <br />
              <Flex justifyContent="center">
                <Link>
                  {" "}
                  <Button
                    onClick={handleClient}
                    style={{
                      backgroundColor: "#fff",
                      fontWeight: "700",
                      color: "black",
                      fontStyle: "italic",
                    }}
                  >
                    Client Login
                  </Button>
                </Link>
              </Flex>
              <br />
            </Box>
            <Box width={["5px"]} backgroundColor="grey"></Box>
            <Box className="developerLogin">
              <Heading className="heading">Developer Login</Heading>
              <br />
              <FormControl
                style={{ color: "#fff", backgroundColor: "600" }}
                textAlign={["center", "right"]}
              >
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setDeveloperEmail(e.target.value)}
                />
                <FormHelperText
                  style={{ color: "#fff", backgroundColor: "600" }}
                >
                  We'll never share your email.
                </FormHelperText>
              </FormControl>
              <br />
              <FormControl
                style={{ color: "#fff", backgroundColor: "600" }}
                textAlign={["center", "right"]}
              >
                <FormLabel>Enter Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => setDeveloperPassword(e.target.value)}
                />
                <FormHelperText
                  style={{ color: "#fff", backgroundColor: "600" }}
                >
                  Try to make a secure password
                </FormHelperText>
              </FormControl>
              <br />
              <Divider />
              <br />
              <Flex justifyContent="center">
                <Button
                  onClick={handleDeveloper}
                  style={{
                    backgroundColor: "#fff",
                    fontWeight: "700",
                    color: "black",
                    fontStyle: "italic",
                  }}
                >
                  Developer Login
                </Button>
              </Flex>
              <br />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ClientDeveloperLogin;
