export interface ListProps {
  items: string[];
}

const List = ({ items }: ListProps) => {
  return (
    <ul className="flex list-inside list-disc flex-col gap-4">
      {items.map((item, idx) => {
        return <li key={idx}>{item}</li>;
      })}
    </ul>
  );
};

export default List;
