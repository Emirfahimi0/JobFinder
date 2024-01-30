import React, { Fragment, FunctionComponent } from "react";
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Icon, CustomSpacer, CustomFlexSpacer, JobSection } from "../../components";
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
  sw24,
  sw1,
  sh8,
  fs10SemiBoldGray3,
} from "../../styles";

interface IHomeScreenProps {}

export const HomeScreen: FunctionComponent<IHomeScreenProps> = ({}: IHomeScreenProps) => {
  const typesJobs = ["Product", "Design", "Development", "FreeLance", "Management"];

  const popularJobs: JobInformation[] = [
    {
      jobTitle: "Lead Product Manager",
      companyTitle: "Google",
      salaryRange: "$60K -$ 80K / Per year",
      srcPath: "../../assets/images/google.png",
      jobTypes: "Full-Time",
    },
    {
      jobTitle: "React Developer",
      companyTitle: "Twitch",
      salaryRange: "$20K -$ 40K / Per year",
      srcPath: "../../assets/images/amazon.png",
      jobTypes: "Contract",
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
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
                      width: "85%",
                      height: sh40,
                      backgroundColor: colorWhite._2,
                      borderRadius: sw16,
                      borderWidth: sw2,
                      borderColor: colorGray._2,
                      ...fs10RegBlack,
                      paddingLeft: sw10,
                    }}
                    placeholder={"What are you looking for?"}
                    showSoftInputOnFocus={false}
                  />
                  <CustomFlexSpacer />
                  <Pressable style={{ height: sh40, width: sw40, backgroundColor: colorYellow, borderRadius: sw16, ...centerHV }}>
                    <Icon name="search" size={sw16} color={colorWhite._1} />
                  </Pressable>
                </View>
              </View>
            </Fragment>
            <Fragment>
              <FlatList
                contentContainerStyle={{ ...flexRow, paddingVertical: sw16 }}
                data={typesJobs}
                horizontal={true}
                ItemSeparatorComponent={() => <CustomSpacer space={sw16} isHorizontal={true} />}
                scrollEnabled={true}
                keyExtractor={(_index) => _index}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      backgroundColor: colorWhite._2,
                      borderColor: colorGray._2,
                      borderRadius: sw24,
                      borderWidth: sw1,
                      paddingHorizontal: sw8,
                      paddingVertical: sh8,
                    }}>
                    <Text style={fs10SemiBoldGray3}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </Fragment>
            <JobSection jobList={popularJobs} sectionTitle={"Popular Jobs"} subLabel={"Show All"} onPress={() => {}} />
            <JobSection jobList={popularJobs} sectionTitle={"On Demands"} subLabel={"Show All"} onPress={() => {}} />
            <JobSection jobList={popularJobs} sectionTitle={"Nearby Jobs"} smallerCard={true} onPress={() => {}} />
          </Fragment>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
