import React, { useState } from "react";

const List = ({ n }: { n: number }) => {
  const [color, setColor] = useState<string | null>(null);

  return (
    <div
      className={`cursor-pointer ${color ? "bg-red-700" : "bg-transparent"}`}
      onClick={() => setColor("red")}
    >
      {n}
    </div>
  );
};

const Keys = () => {
  const [list, setList] = useState([1, 2, 3]);
  const [listTwo, setListTwo] = useState([1, 2, 3]);

  return (
    <div>
      <button
        onClick={() => {
          setList((prev) => {
            const max = Math.max(...prev);
            return [max + 1, ...prev];
          });
        }}
      >
        add first
      </button>
      <br />
      <button
        onClick={() => {
          setListTwo((prev) => {
            const max = Math.max(...prev);
            return [max + 1, ...prev];
          });
        }}
      >
        add second
      </button>
      <hr />
      <h1>Without keys</h1>
      <ul>
        {list.map((n) => {
          return <List n={n} />;
        })}
      </ul>
      <hr />
      <h1>Using keys</h1>
      <ul>
        {listTwo.map((n) => {
          return <List n={n} key={n} />;
        })}
      </ul>
    </div>
  );
};

export default Keys;
