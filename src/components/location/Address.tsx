import { AddressType } from "../../types/autogen";
import Container from "../common/Container";
import Text, { TextProps } from "../common/Text";

export interface AddressProps {
  /**
   * @displayName Address
   */
  address?: AddressType;
  /**
   * @displayName Text Style
   */
  textStyleProps?: Pick<TextProps, "size" | "weight" | "align" | "color">;
}

export const initialProps: AddressProps = {
  address: {
    line1: "123 Main St",
    city: "New York",
    region: "NY",
    postalCode: "10001",
  },
  textStyleProps: {
    size: "M",
    weight: "Regular",
    align: "Left",
    color: "Gray 900",
  },
};

const Address = ({ address, textStyleProps }: AddressProps) => {
  if (!address) {
    return null;
  }

  return (
    <Container layout="column">
      <Text
        size={textStyleProps?.size}
        weight={textStyleProps?.weight}
        align={textStyleProps?.align}
        color={textStyleProps?.color}
        text={address.line1}
      />
      <Text
        size={textStyleProps?.size}
        weight={textStyleProps?.weight}
        align={textStyleProps?.align}
        color={textStyleProps?.color}
        text={`${address.city}, ${address.region} ${address.postalCode}`}
      />
    </Container>
  );
};

export default Address;
