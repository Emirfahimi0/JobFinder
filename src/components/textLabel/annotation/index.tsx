import { Text, View } from "react-native";

import { Fragment, FunctionComponent } from "react";
import { flexRow, fs12BoldBlack, fsAlignLeft, sh4, sw2, fs12RegGray1, flexWrap, alignItemsStart } from "../../../styles";
import { CustomSpacer } from "../../spacer";
import { bulletFormatter, toRoman } from "../../../utils";

type annotationTypes = "bullet" | "number" | "roman";
interface AnnotationsComponentsProps {
  annotation?: annotationTypes;
  text: string;
}

export const Annotations: FunctionComponent<AnnotationsComponentsProps> = ({ annotation, text }: AnnotationsComponentsProps) => {
  let symbol = "";

  const readSymbol = (index: number) => {
    switch (annotation) {
      case "bullet":
        return (symbol = "\u2022");
      case "number":
        return (symbol = `${index + 1}.`);
      case "roman":
        return (symbol = toRoman(index + 1));
      default:
        return "";
    }
  };

  return (
    <Fragment>
      {bulletFormatter(text).map((sentence, _index) => {
        return (
          <View style={{ ...flexRow, ...flexWrap, ...alignItemsStart }} key={_index}>
            <Text style={{ ...fs12BoldBlack, ...fsAlignLeft, paddingTop: sh4 }}>{readSymbol(_index)}</Text>
            <CustomSpacer space={sw2} isHorizontal={true} />
            <Text style={{ ...fs12RegGray1, ...fsAlignLeft, paddingVertical: sh4 }}>{sentence}</Text>
          </View>
        );
      })}
    </Fragment>
  );
};
