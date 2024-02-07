import React, { FunctionComponent } from "react";
import { ActivityIndicator, Modal, SafeAreaView, View } from "react-native";
import { centerHV, colorGreen, colorWhite, flexChild, fullHW, sw30 } from "../../styles";

export interface LoaderComponentsProps {
  isVisible: boolean;
  color?: string;
}

export const Loading: FunctionComponent<LoaderComponentsProps> = ({ isVisible, color }: LoaderComponentsProps) => {
  return (
    <SafeAreaView>
      <Modal style={flexChild} visible={isVisible} animationType="fade" transparent={true}>
        <View style={{ ...centerHV, ...fullHW, backgroundColor: "rgba(0,0,0,0.7)" }}>
          <ActivityIndicator color={color ? color : colorWhite._1} size={sw30} hidesWhenStopped />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export const Loader: FunctionComponent<LoaderComponentsProps> = ({ isVisible, color }: LoaderComponentsProps) => {
  return (
    <SafeAreaView>
      <View style={{ ...flexChild, ...centerHV, paddingTop: 100 }}>
        <ActivityIndicator color={color ? color : colorGreen} size={sw30} hidesWhenStopped={isVisible} />
      </View>
    </SafeAreaView>
  );
};
