import { ParamListBase } from "@react-navigation/native";

export interface INavigationParamsList extends ParamListBase {
  JobDetailsPage: undefined;
  HomePage: undefined;
}

export type IStackNavigationProp = import("@react-navigation/native-stack").NativeStackNavigationProp<INavigationParamsList>;

export type TPageType = "HomePage" | "JobDetailsPage";
