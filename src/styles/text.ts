import { TextStyle } from "react-native";
import { PoppinsBold, PoppinsRegular, PoppinsSemiBold } from "../constants";
import { colorBlack, colorGray, colorWhite } from "./color";
import { sh10, sh12, sh16, sh18, sh24 } from "./size";
import { scaleHeight } from "../utils";

export const fsAlignCenter: TextStyle = { textAlign: "center" };
export const fsAlignLeft: TextStyle = { textAlign: "left" };
export const fsAlignRight: TextStyle = { textAlign: "right" };

export const fsCapitalize: TextStyle = {
  textTransform: "capitalize",
};

export const fsNoLineHeight: TextStyle = {
  lineHeight: undefined,
};

export const fsTransformNone: TextStyle = {
  textTransform: "none",
};

export const fsUnderline: TextStyle = {
  textDecorationLine: "underline",
};

export const fsUppercase: TextStyle = {
  textTransform: "uppercase",
};

export const fs10RegBlack: TextStyle = {
  color: colorBlack,
  fontFamily: PoppinsRegular,
  fontSize: sh10,
  lineHeight: scaleHeight(10 * 1.6),
};
export const fs10BoldBlack: TextStyle = {
  color: colorBlack,
  fontFamily: PoppinsBold,
  fontSize: sh10,
  lineHeight: scaleHeight(10 * 1.6),
};

export const fs10RegWhite1: TextStyle = {
  color: colorWhite._1,
  fontFamily: PoppinsRegular,
  fontSize: sh10,
  lineHeight: scaleHeight(10 * 1.6),
};

export const fs10RegGray2: TextStyle = {
  color: colorGray._2,
  fontFamily: PoppinsRegular,
  fontSize: sh10,
  lineHeight: scaleHeight(10 * 1.6),
};

export const fs10RegGray1: TextStyle = {
  color: colorGray._1,
  fontFamily: PoppinsRegular,
  fontSize: sh10,
  lineHeight: scaleHeight(10 * 1.6),
};

export const fs10SemiBoldGray3: TextStyle = {
  color: colorGray._3,
  fontFamily: PoppinsSemiBold,
  fontSize: sh10,
  lineHeight: scaleHeight(10 * 1.6),
};

export const fs12RegBlack: TextStyle = {
  color: colorBlack,
  fontFamily: PoppinsRegular,
  fontSize: sh12,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs12RegWhite1: TextStyle = {
  color: colorWhite._1,
  fontFamily: PoppinsRegular,
  fontSize: sh12,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs12BoldBlack: TextStyle = {
  color: colorBlack,
  fontFamily: PoppinsBold,
  fontSize: sh12,
  lineHeight: scaleHeight(12 * 1.3),
};
export const fs12BoldWhite1: TextStyle = {
  color: colorWhite._1,
  fontFamily: PoppinsBold,
  fontSize: sh12,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs16BoldBlack: TextStyle = {
  color: colorBlack,
  fontFamily: PoppinsBold,
  fontSize: sh16,
  lineHeight: scaleHeight(16 * 1.48),
};
export const fs16RegBlack: TextStyle = {
  color: colorBlack,
  fontFamily: PoppinsRegular,
  fontSize: sh16,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs18RegBlack: TextStyle = {
  color: colorBlack,
  fontFamily: PoppinsRegular,
  fontSize: sh18,
  lineHeight: scaleHeight(18 * 1.35),
};
export const fs18BoldBlack: TextStyle = {
  color: colorBlack,
  fontFamily: PoppinsBold,
  fontSize: sh18,
  lineHeight: scaleHeight(18 * 1.35),
};

export const fs24RegBlack: TextStyle = {
  color: colorBlack,
  fontFamily: PoppinsRegular,
  fontSize: sh24,
  lineHeight: scaleHeight(24 * 1.35),
};
