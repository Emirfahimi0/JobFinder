import React, { FunctionComponent } from "react";
import { PublicRoute } from "./navigation";
import { NavigationContainer } from "@react-navigation/native";

const App: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <PublicRoute />
    </NavigationContainer>
  );
};

export default App;
