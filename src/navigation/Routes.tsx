import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FunctionComponent } from "react";
import { HomePage, JobDetailsPage } from "../screens";
import { INavigationParamsList } from "../types/navigation";

const { Screen, Navigator } = createNativeStackNavigator<INavigationParamsList>();

export const PublicRoute: FunctionComponent = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="OnBoarding">
      <Screen name="OnBoarding" component={HomePage} />
      <Screen name="JobDetailsPage" component={JobDetailsPage} />
    </Navigator>
  );
};
