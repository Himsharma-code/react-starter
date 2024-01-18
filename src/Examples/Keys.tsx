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

  return (
    <div>
      <button
        onClick={() => {
          setList((prev) => [prev[prev.length - 1] + 1, ...prev]);
        }}
      >
        add
      </button>
      <ul>
        {list.map((n) => {
          return <List n={n} />;
        })}
      </ul>
    </div>
  );
};

export default Keys;
