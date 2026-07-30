import { type JSX } from "react";

interface ListProps<I extends { id: string }> {
  data: I[];
  render: (item: I) => JSX.Element;
}

const List = <I extends { id: string }>({ data, render }: ListProps<I>) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id}>{render(item)}</div>
      ))}
    </>
  );
};

export default List;
