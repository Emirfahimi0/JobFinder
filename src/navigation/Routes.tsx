import { createStackNavigator } from "@react-navigation/stack";
import React, { FunctionComponent } from "react";
import { SignIn, SignUp, WelcomePage } from "../pages";
import { HomeScreen } from "../screens/Home";

const { Screen, Navigator } = createStackNavigator<INavigationParamsList>();

export const PublicRoute: FunctionComponent = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="OnBoarding" component={HomeScreen} />
    </Navigator>
  );
};
