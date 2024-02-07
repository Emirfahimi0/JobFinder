import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import React, { Fragment, FunctionComponent, useState } from "react";
import { Icon, CustomFlexSpacer, SelectionsPill, CustomSpacer, Annotations, FullTextDisplay, Loader } from "../../components";
import {
  sw18,
  sh24,
  flexChild,
  flexRowSbSb,
  centerHV,
  sh42,
  sh32,
  flexWrap,
  fs12BoldBlack,
  fsAlignCenter,
  sh12,
  sw12,
  sh20,
  flexRow,
  colorYellow,
  sw48,
  colorWhite,
  colorGreen,
  fs12BoldWhite1,
  sw4,
  sw24,
  alignSelfEnd,
  fullWidth,
  sh8,
  fs14BoldBlack,
  sh64,
  colorPink,
} from "../../styles";

interface JobDetailsComponentProps {
  categories: jobsInformationType[];
  jobInformations: IJobInformation;
  goBack: () => void;
  loading: boolean;
}

export const JobDetailsComponent: FunctionComponent<JobDetailsComponentProps> = ({
  categories,
  goBack,
  loading,
  jobInformations,
}: JobDetailsComponentProps) => {
  const [activeTabs, setActiveTabs] = useState<jobsInformationType>("About");

  const { title, companyTitle, description } = jobInformations;
  const { about, responsibilities, qualification } = description;

  const handleActivePills = (index: number) => {
    setActiveTabs(categories[index]);
  };

  const activeTabIndex = categories.indexOf(activeTabs);

  let content = <View />;

  if (activeTabs === "About" && about !== undefined) {
    content = <Annotations text={description.about} annotation={"bullet"} />;
  }
  if (activeTabs === "Qualification" && qualification !== undefined) {
    content = <FullTextDisplay text={qualification} />;
  }
  if (activeTabs === "Resposibilities" && responsibilities !== undefined) {
    content = <FullTextDisplay text={responsibilities} />;
  }

  return (
    <SafeAreaView style={{ flex: 2 }}>
      <Fragment>
        <ScrollView contentContainerStyle={{ paddingHorizontal: sw18, paddingVertical: sh24 }}>
          <View style={flexChild}>
            <View style={flexRowSbSb}>
              <TouchableOpacity onPress={goBack}>
                <Icon name={"ios-arrow-left"} />
              </TouchableOpacity>
              <Icon name={"share-social"} />
            </View>
            <Fragment>
              {loading === true ? (
                <Loader isVisible={loading} />
              ) : (
                <View style={{ ...centerHV, paddingVertical: sh42 }}>
                  <Image source={require("../../assets/images/google.png")} />
                  <View style={{ paddingVertical: sh32, ...centerHV, ...flexWrap }}>
                    <Text style={{ ...fs12BoldBlack, ...fsAlignCenter, paddingVertical: sh12 }}>{title}</Text>
                    <Text style={fs12BoldBlack}>{companyTitle}</Text>
                  </View>
                  <SelectionsPill
                    activeIndex={activeTabIndex}
                    onActivate={handleActivePills}
                    value={categories}
                    activeContainerColor={colorPink}
                  />
                  <View style={{ marginVertical: sh20 }}>
                    <Text style={fs14BoldBlack}>{`${activeTabs}:`}</Text>
                    <CustomSpacer space={sh12} />
                    {content}
                  </View>
                </View>
              )}
            </Fragment>
          </View>
        </ScrollView>
      </Fragment>
      <Fragment>
        <View style={bottomBarStyle}>
          <View style={{ ...flexChild, ...flexRow }}>
            <View style={{ ...centerHV, backgroundColor: colorYellow, width: sw48, borderRadius: sw12 }}>
              <Icon name={"md-heart-empty"} color={colorWhite._1} />
            </View>
            <CustomFlexSpacer />
            <View style={{ backgroundColor: colorGreen, width: "80%", borderRadius: sw12, ...centerHV, ...flexRow }}>
              <Text style={fs12BoldWhite1}>Apply for this job</Text>
              <CustomSpacer isHorizontal={true} space={sw4} />
              <Icon name={"information-circle"} color={colorWhite._1} size={sw24} />
            </View>
          </View>
        </View>
      </Fragment>
    </SafeAreaView>
  );
};

const bottomBarStyle: ViewStyle = {
  ...alignSelfEnd,
  ...fullWidth,
  paddingVertical: sh8,
  paddingHorizontal: sw12,
  elevation: sh20,
  backgroundColor: colorWhite._1,
  shadowOffset: {
    width: sw24,
    height: sh24,
  },
  shadowOpacity: 0.7,
  shadowColor: colorYellow,
  height: sh64,
  zIndex: 1,
  overflow: "hidden",
  borderTopRightRadius: sw24,
  borderTopLeftRadius: sw24,
};
