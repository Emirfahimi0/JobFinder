import React, { Fragment, FunctionComponent } from "react";
import { Text, View, ViewStyle } from "react-native";
import {
  colorYellow,
  sw12,
  sh128,
  sw16,
  sh16,
  sw216,
  flexRowSbSb,
  colorWhite,
  sh8,
  flexChild,
  fs12RegWhite1,
  fs12BoldWhite1,
  fs10RegWhite1,
} from "../../styles";
import { Icon } from "../IcoMoon";
import { CustomSpacer } from "../spacer";

interface IMedSizeCardProps {
  containerStyle?: ViewStyle;
  item: jobList;
}

export const MdSizeCard: FunctionComponent<IMedSizeCardProps> = ({ containerStyle, item }: IMedSizeCardProps) => {
  const cardStyle: ViewStyle = {
    backgroundColor: colorYellow,
    borderRadius: sw12,
    height: sh128,
    paddingHorizontal: sw16,
    paddingVertical: sh16,
    width: sw216,
  };
  const defaultStyle = containerStyle === undefined ? cardStyle : { ...cardStyle, ...containerStyle };

  return (
    <Fragment>
      <View style={defaultStyle}>
        <View style={flexRowSbSb}>
          <Icon name="logo-google" size={sw16} color={colorWhite._2} />
          <Icon name="logo-venmo" size={sw16} />
        </View>
        <CustomSpacer space={sh8} />
        <View style={{ ...flexChild, justifyContent: "space-evenly" }}>
          <Text style={fs12RegWhite1}>{item.companyTitle}</Text>
          <Text style={fs12BoldWhite1}>{item.jobTitle}</Text>
          <Text style={fs10RegWhite1}>{item.salaryRange}</Text>
        </View>
      </View>
    </Fragment>
  );
};
