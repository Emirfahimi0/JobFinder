import React, { FunctionComponent } from "react";
import { FlatList, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { sw12, colorGray, sw16, sh12, sw120, fs10RegWhite1, fs10RegGray1, sh16 } from "../../styles";
import { CustomSpacer } from "../spacer";
import { PoppinsBold } from "../../constants";

interface ISelectionsPillProps<T> {
  activeContainerColor?: string;
  activeIndex: number;
  containerStyle?: ViewStyle;
  onActivate: (index: number) => void;
  textOnActive?: TextStyle;
  value: T[];
}

export const SelectionsPill: FunctionComponent<ISelectionsPillProps<any>> = ({
  activeIndex,
  value,
  containerStyle,
  textOnActive,
  activeContainerColor,
  onActivate,
}: ISelectionsPillProps<any>) => {
  return (
    <FlatList
      data={value}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: sw12, paddingVertical: sh16 }}
      ItemSeparatorComponent={() => <CustomSpacer space={sw12} isHorizontal={true} />}
      renderItem={({ item, index }) => {
        const activeBackgroundColor = activeContainerColor === undefined ? undefined : activeContainerColor;
        const pillsStyle: ViewStyle = {
          borderRadius: sw12,
          paddingHorizontal: sw16,
          paddingVertical: sh12,
          maxWidth: sw120,
          ...containerStyle,
          backgroundColor: activeIndex === index ? activeBackgroundColor : colorGray._2,
        };

        const defaultTextStyle: TextStyle = {
          ...(activeIndex === index
            ? textOnActive === undefined
              ? { ...fs10RegWhite1, ...{ fontFamily: PoppinsBold } }
              : textOnActive
            : fs10RegGray1),
        };

        const handleOnPress = () => {
          onActivate(index);
        };
        return (
          <TouchableOpacity key={index} style={pillsStyle} onPress={handleOnPress}>
            <Text style={defaultTextStyle}>{item}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};
