import React, { Fragment, FunctionComponent, useState } from "react";
import { Image, Text, TouchableOpacity, View, ViewStyle } from "react-native";
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
  sw24,
  sw4,
  sw28,
  sh28,
  sw25,
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

  const [isLike, setisLike] = useState<boolean>(false);
  const defaultStyle = containerStyle === undefined ? cardStyle : { ...cardStyle, ...containerStyle };

  return (
    <Fragment>
      <View style={defaultStyle}>
        <View style={flexRowSbSb}>
          <Image
            source={{ uri: item.srcPath }}
            style={{ width: sw28, height: sh28, borderRadius: sw25, borderWidth: sw4, backgroundColor: colorWhite._1 }}
            resizeMethod="resize"
            resizeMode="cover"
          />
          <TouchableOpacity onPress={() => setisLike((isLike) => !isLike)}>
            <Icon name={isLike === true ? "md-heart" : "md-heart-empty"} size={sw24} color={isLike === true ? "red" : colorWhite._2} />
          </TouchableOpacity>
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
