import React, { ChangeEvent, FC, useState } from "react";
import { GetServerSideProps } from "next";
import { Layout } from "../components/layouts";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FormControl } from "@mui/base";
import Cookies from "js-cookie";
import axios from "axios";
interface Props {
  theme: string;
}
const ThemeChangerPage: FC<Props> = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(e.target.value);
    Cookies.set("theme", e.target.value);
  };

  const onRequest = async () => {
    const { data } = await axios.get("/api/hello");
    console.log(data);
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Theme</FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeChange}>
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
              />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Custom"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button onClick={onRequest}>Request</Button>
        </CardActions>
      </Card>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const validThemes = ["dark", "light", "custom"];
  const { theme = "dark" } = req.cookies;
  return {
    props: {
      theme: validThemes.includes(theme) ? theme : "dark",
    },
  };
};

export default ThemeChangerPage;
