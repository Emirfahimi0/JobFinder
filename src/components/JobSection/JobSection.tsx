import React, { Fragment, FunctionComponent } from "react";
import { FlatList, Text, View } from "react-native";
import { flexChild, sh18, flexRowSbSb, sh8, fs16BoldBlack, fs12RegBlack, sw16, sw12 } from "../../styles";
import { CustomSpacer } from "../spacer";
import { MdSizeCard } from "../Card";

interface JobListComponentProps {
  jobList: jobList[];
  sectionTitle: string;
}

export const JobSection: FunctionComponent<JobListComponentProps> = ({ jobList, sectionTitle }: JobListComponentProps) => {
  return (
    <Fragment>
      <View style={{ ...flexChild, paddingVertical: sh18 }}>
        <View style={flexRowSbSb}>
          <Text style={fs16BoldBlack}>{sectionTitle}</Text>
          <Text style={fs12RegBlack}>Show all</Text>
        </View>
        <CustomSpacer space={sh8} />
        <Fragment>
          <FlatList
            contentContainerStyle={{ padding: sw12 }}
            horizontal={true}
            scrollEnabled={true}
            data={jobList}
            ItemSeparatorComponent={() => <CustomSpacer space={sw16} isHorizontal={true} />}
            renderItem={({ item }) => <MdSizeCard item={item} />}
          />
        </Fragment>
      </View>
    </Fragment>
  );
};
