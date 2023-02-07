import { ComponentProps, FC } from "react";
import { Input } from "@chakra-ui/react";

type Props = ComponentProps<typeof Input>;

// NOTE: temporary default chakra prop
export const TextInput: FC<Props> = (props) => {
  return <Input {...props} />;
};
