import { View, Text, Image } from "react-native";
import React, { Fragment, FunctionComponent } from "react";
import { sw16, sw1, sw10, colorGray, flexRow, sh40, sw40, sw25, sw2, sw8, fs12BoldBlack, fs10SemiBoldGray3 } from "../../styles";
import { CustomSpacer, CustomFlexSpacer } from "../spacer";
import { IMedSizeCardProps } from "./MdSizeCard";

interface SmSizeCard extends IMedSizeCardProps {
  spaceTop?: number;
}

export const SmSizeCard: FunctionComponent<SmSizeCard> = ({ item, spaceTop }: SmSizeCard) => {
  return (
    <Fragment>
      <View style={{ borderRadius: sw16, borderWidth: sw1, padding: spaceTop === undefined ? sw10 : spaceTop, borderColor: colorGray._2 }}>
        <View style={flexRow}>
          <Image
            source={require("../../assets/images/spotify.png")}
            style={{
              height: sh40,
              width: sw40,
              borderRadius: sw25,
              borderWidth: sw2,
              borderColor: colorGray._3,
            }}
            resizeMode="contain"
          />
          <CustomSpacer space={sw8} isHorizontal={true} />
          <View>
            <Text style={fs12BoldBlack}>{item.jobTitle}</Text>
            <CustomFlexSpacer />
            <Text style={fs10SemiBoldGray3}>{item.companyTitle}</Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default SmSizeCard;
