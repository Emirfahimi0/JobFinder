import React, { Fragment, FunctionComponent } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { flexChild, sh18, flexRowSbSb, sh8, fs16BoldBlack, fs12RegBlack, sw16, sh12 } from "../../styles";
import { CustomSpacer } from "../spacer";
import { MdSizeCard, SmSizeCard } from "../card";

interface JobListComponentProps {
  jobList: JobInformation[];
  onPress?: () => void;
  sectionTitle: string;
  smallerCard?: boolean;
  subLabel?: string;
}

export const JobSection: FunctionComponent<JobListComponentProps> = ({
  jobList,
  sectionTitle,
  onPress,
  subLabel,
  smallerCard,
}: JobListComponentProps) => {
  return (
    <Fragment>
      <View style={{ ...flexChild, paddingVertical: sh18 }}>
        <View style={flexRowSbSb}>
          <Text style={fs16BoldBlack}>{sectionTitle}</Text>
          {subLabel === undefined ? null : <Text style={fs12RegBlack}>{subLabel}</Text>}
        </View>
        <CustomSpacer space={sh8} />
        <Fragment>
          <FlatList
            contentContainerStyle={{ paddingVertical: sh12 }}
            horizontal={!smallerCard ? true : undefined}
            scrollEnabled={true}
            data={jobList}
            ItemSeparatorComponent={() => <CustomSpacer space={sw16} isHorizontal={!smallerCard ? true : undefined} />}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={onPress}>
                {smallerCard === true ? <SmSizeCard item={item} /> : <MdSizeCard item={item} />}
              </TouchableOpacity>
            )}
          />
        </Fragment>
      </View>
    </Fragment>
  );
};
