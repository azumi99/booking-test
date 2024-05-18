import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  Icon,
  ChevronDownIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@gluestack-ui/themed";
import dataInterface from "./interface";
import { DimensionValue } from "react-native";
type Props = {
  label?: string;
  valueChange: (value: string) => void;
  placeHolder?: string;
  variant?: "rounded" | "outline" | "underlined" | undefined;
  size?: "sm" | "md" | "lg" | "xl" | undefined;
  defaultValue?: string;
  data: dataInterface[];
  width?: DimensionValue | undefined;
};
const SelectComponent: React.FC<Props> = ({
  label,
  valueChange,
  placeHolder,
  variant,
  size,
  defaultValue,
  width,
  data,
}) => {
  return (
    <FormControl width={width}>
      {label && (
        <FormControlLabel>
          <FormControlLabelText>{label}</FormControlLabelText>
        </FormControlLabel>
      )}

      <Select
        onValueChange={(value: string) => valueChange(value)}
        selectedValue={defaultValue}
      >
        <SelectTrigger
          variant={variant}
          size={size}
          borderRadius={10}
          alignItems="center"
        >
          <SelectInput placeholder={placeHolder} />
          <SelectIcon mr={"$3"}>
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {data.map((item, index) => (
              <SelectItem key={index} label={item.label} value={item.value} />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
    </FormControl>
  );
};

export { SelectComponent };
