import { ComplexImageType } from "@yext/sites-components";

export interface NumberProps {
  number: number;
  testProp?: ComplexImageType;
}

const Number = ({ number }: NumberProps) => {
  return <span>{number}</span>;
};

export default Number;
