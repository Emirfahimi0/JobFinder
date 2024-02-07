import React, { Fragment, FunctionComponent, useState } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View, ViewStyle } from "react-native";
import { Icon, CustomSpacer, CustomFlexSpacer, JobSection, Loader, SelectionsPill } from "../../components";
import {
  sw16,
  flexRowSbSb,
  sw26,
  sh28,
  sw8,
  sh32,
  fs12RegBlack,
  sh16,
  fs18BoldBlack,
  flexChild,
  flexRow,
  sh40,
  colorWhite,
  sw2,
  colorGray,
  fs10RegBlack,
  sw10,
  sw40,
  colorYellow,
  centerHV,
  flexGrow,
  sw24,
  sh8,
  sw1,
  fs10BoldWhite1,
} from "../../styles";
import { TPageType } from "../../types/navigation";

interface HomeScreenComponentsProps {
  loading: boolean;
  navigate: (page: TPageType) => void;
  nearbyJobs: JobInformation[];
  popularJobs: JobInformation[];
}
export const HomeScreenComponent: FunctionComponent<HomeScreenComponentsProps> = ({
  popularJobs,
  nearbyJobs,
  navigate,
  loading,
}: HomeScreenComponentsProps) => {
  const [activeTabs, setActiveTabs] = useState<jobsCategoriesType>("Development");

  const typesJobs: jobsCategoriesType[] = ["Product", "Design", "Development", "FreeLance", "Management"];

  const activeTabIndex = typesJobs.indexOf(activeTabs);

  const handleActivePills = (index: number) => {
    setActiveTabs(typesJobs[index]);
  };

  return (
    <SafeAreaView>
      <ScrollView
        bounces={false}
        maintainVisibleContentPosition={{ autoscrollToTopThreshold: 20, minIndexForVisible: 200 }}
        contentContainerStyle={flexGrow}>
        <View style={{ padding: sw16 }}>
          <Fragment>
            <View style={flexRowSbSb}>
              <Icon name="menu" size={sw26} strokeWidth={sw16} />
              <Image
                source={require("../../assets/images/profile.png")}
                style={{ width: sh28, height: sh28, padding: sw8 }}
                resizeMode="contain"
              />
            </View>
            <Fragment>
              <View style={{ paddingVertical: sh32 }}>
                <Text style={fs12RegBlack}>Hello Emir Fahimi!</Text>
                <CustomSpacer space={sh16} />
                <Text style={fs18BoldBlack}>Find your perfect job</Text>
              </View>
            </Fragment>
            <Fragment>
              <View style={flexChild}>
                <View style={flexRow}>
                  <TextInput
                    clearTextOnFocus={true}
                    style={{
                      ...fs10RegBlack,
                      width: "85%",
                      height: sh40,
                      backgroundColor: colorWhite._2,
                      borderRadius: sw16,
                      borderWidth: sw2,
                      borderColor: colorGray._2,
                      paddingLeft: sw10,
                    }}
                    placeholder={"What are you looking for?"}
                    showSoftInputOnFocus={false}
                  />
                  <CustomFlexSpacer />
                  <Pressable
                    style={{ height: sh40, width: sw40, backgroundColor: colorYellow, borderRadius: sw16, ...centerHV }}
                    onPress={() => navigate("JobDetailsPage")}>
                    <Icon name="search" size={sw16} color={colorWhite._1} />
                  </Pressable>
                </View>
              </View>
            </Fragment>
            <Fragment>
              <SelectionsPill
                activeIndex={activeTabIndex}
                onActivate={handleActivePills}
                value={typesJobs}
                containerStyle={pillStyle}
                activeContainerColor={colorYellow}
                textOnActive={fs10BoldWhite1}
              />
            </Fragment>
            {loading === true ? (
              <Loader isVisible={loading} color={"black"} />
            ) : (
              <Fragment>
                <JobSection jobList={popularJobs} sectionTitle={"Popular Jobs"} subLabel={"Show All"} onPress={() => {}} />
                <JobSection jobList={popularJobs} sectionTitle={"On Demands"} subLabel={"Show All"} onPress={() => {}} />
                <JobSection jobList={nearbyJobs} sectionTitle={"Nearby Jobs"} smallerCard={true} onPress={() => {}} />
              </Fragment>
            )}
          </Fragment>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const pillStyle: ViewStyle = {
  backgroundColor: colorWhite._2,
  borderColor: colorGray._2,
  borderRadius: sw24,
  borderWidth: sw1,
  paddingHorizontal: sw8,
  paddingVertical: sh8,
};
