import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Counter from "../features/counter/Counter";
import styles from "../styles/Home.module.css";

const IndexPage: NextPage = () => {
  return (
    <div>
      <div className="mahdi"></div>
    </div>
  );
};

export default IndexPage;
