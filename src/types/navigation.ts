interface INavigationParamsList extends ParamListBase {
  JobDetailsPage: undefined;
  HomePage: undefined;
}

type IStackNavigationProp = import("@react-navigation/stack").StackNavigationProp<INavigationParamsList>;
type ITabNavigationProp = import("@react-navigation/bottom-tabs").BottomTabNavigationProp<ITabNavigationParamsList>;

type TPageType = "OnBoarding" | "JobDetailsPage";
