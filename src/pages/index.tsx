import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Counter from "../features/counter/Counter";
import styles from "../styles/Home.module.css";

const IndexPage: NextPage = () => {
  // از sاستفاده
  const [state, setState] = useState<string | null>(null);

  let id: number = 5;
  let company: string = "mahdi mahmoodi";
  let isPublished: boolean = true;
  let x: any = "hello";
  let ids: number[] = [1, 2, 3, 4, 5];
  let arr: (number | string | boolean)[] = [1, true, "hello"];

  //tuple
  let person: [number, string, boolean] = [1, "brad", true];

  //tuple array
  let rmployee = [
    [1, "brad"],
    [2, "mamad"],
    [3, "hasan"],
  ];
  //union
  let pid: string | number;
  pid = "22";
  pid = 22;

  //enum
  enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
  }
  // object
  type User = {
    id: number;
    name: string;
  };
  //interfaces
  interface UserInterdace {
    readonly id: number;
    name: string;
    age?: number;
  }

  const user1: UserInterdace = {
    id: 1,
    name: "john",
  };

  const user: User = {
    id: 1,
    name: "john",
  };

  // type assertion
  let cid: any = 10;
  let customerID = cid as string;
  let mahdi = cid as number;

  //function
  function addNum(x: number, y: string): any {
    return x + y;
  }

  function log(message: string | number): void {
    console.log(message);
  }

  interface MthFunc {
    (x: number, y: number): number;
  }
  const add: MthFunc = (x: number, y: number): number => x + y;
  const sub: MthFunc = (x: number, y: number): number => x - y;

  interface PersonInterdace {
    id: number;
    name: string;
    register(): string;
  }

  //classes

  class Person implements PersonInterdace {
    public id: number;
    name: string;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
    register() {
      return `${this.name} is now registered`;
    }
  }
  const brad = new Person(1, "Brad Traversy");
  const mike = new Person(2, "Mike Jordan");

  //generics
  function getArray<Y>(items: Y[]): Y[] {
    return new Array().concat(items);
  }
  let numArray = getArray<number>([1, 2, 3, 4]);
  let strArray = getArray<string>(["brad", "john", "jill"]);
  strArray.push("brad");

  return (
    <div>
      <div className="mahdi"></div>
    </div>
  );
};

export default IndexPage;
