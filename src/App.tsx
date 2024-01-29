import React, { Fragment, FunctionComponent } from "react";
import { SafeAreaView, ScrollView, Text, View, Image, TextInput, TouchableOpacity, FlatList } from "react-native";

import {
  flexChild,
  sw16,
  flexRowSbSb,
  sw4,
  sh32,
  fs18BoldBlack,
  fs12RegBlack,
  sw26,
  sh28,
  sw8,
  sh16,
  flexRow,
  sw2,
  sw40,
  colorGray,
  colorWhite,
  centerHV,
  sh40,
  fs10RegBlack,
  sw10,
  colorYellow,
  sw1,
  fs10SemiBoldGray3,
} from "./styles";

import { CustomFlexSpacer, CustomSpacer, Icon, JobSection } from "./components";
const App: FunctionComponent = () => {
  const typesJobs = ["Product", "Design", "Development", "FreeLance", "Management"];

  const popularJobs: jobList[] = [
    {
      jobTitle: "Lead Product Manager",
      companyTitle: "Google",
      salaryRange: "$60K -$ 80K / Per year",
      srcPath: "../../assets/images/google.png",
    },
    {
      jobTitle: "React Developer",
      companyTitle: "Twitch",
      salaryRange: "$20K -$ 40K / Per year",
      srcPath: "../../assets/images/amazon.png",
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={flexChild}>
          <View style={{ padding: sw16 }}>
            <Fragment>
              <View style={flexRowSbSb}>
                <Icon name="menu" size={sw26} strokeWidth={sw16} />
                <Image
                  source={require("./assets/images/profile.png")}
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
                <View style={{ height: sh40 }}>
                  <View style={flexRow}>
                    <TextInput
                      style={{
                        width: "85%",
                        backgroundColor: colorWhite._2,
                        borderRadius: sw8,
                        borderWidth: sw2,
                        borderColor: colorGray._2,
                        ...fs10RegBlack,
                        paddingLeft: sw10,
                      }}
                      placeholder="What are you looking for?"
                      textAlignVertical="center"
                    />
                    <CustomFlexSpacer />
                    <View style={{ height: sh40, width: sw40, backgroundColor: colorYellow, borderRadius: sw10, ...centerHV }}>
                      <Icon name="search" size={sw16} color={colorWhite._1} />
                    </View>
                  </View>
                </View>
              </Fragment>
              <Fragment>
                <FlatList
                  contentContainerStyle={{ paddingVertical: sw16, ...flexRow }}
                  data={typesJobs}
                  horizontal={true}
                  ItemSeparatorComponent={() => <CustomSpacer space={sw16} isHorizontal={true} />}
                  scrollEnabled={true}
                  keyExtractor={(_index) => _index}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={{
                        borderRadius: sw8,
                        borderWidth: sw1,
                        borderColor: colorGray._2,
                        padding: sw4,
                        backgroundColor: colorWhite._2,
                      }}>
                      <Text style={fs10SemiBoldGray3}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </Fragment>
              <JobSection jobList={popularJobs} sectionTitle={"Popular Jobs"} />
            </Fragment>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
