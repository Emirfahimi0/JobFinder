import { View, Text, TextStyle } from "react-native";
import React, { FunctionComponent } from "react";
import { fs12RegBlack, fsAlignLeft } from "../../../styles";

interface IFullTextDisplayProps {
  text: string;
  textStyle?: TextStyle;
}

export const FullTextDisplay: FunctionComponent<IFullTextDisplayProps> = ({ text, textStyle }: IFullTextDisplayProps) => {
  const textDisplayStyle = textStyle === undefined ? defaultTextStyle : { ...defaultTextStyle, ...textStyle };
  return (
    <View>
      <Text style={textDisplayStyle}>{text}</Text>
    </View>
  );
};

const defaultTextStyle: TextStyle = {
  ...fs12RegBlack,
  ...fsAlignLeft,
};
