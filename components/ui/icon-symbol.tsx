import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolWeight } from "expo-symbols";
import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

const MAPPING = {
  // Common
  "house.fill": "home",
  "paperplane.fill": "send",
  "chevron.left": "chevron-left",
  "chevron.right": "chevron-right",
  magnifyingglass: "search",
  "xmark.circle.fill": "cancel",
  plus: "add",
  minus: "remove",
  "cart.fill": "shopping-cart",
  "barcode.viewfinder": "qr-code-scanner",

  // Medical Icons
  "pills.fill": "medication",
  "cross.case.fill": "medical-services",
  "waveform.path.ecg": "monitor-heart",
  "flask.fill": "science",
} as const;

export type IconSymbolName = keyof typeof MAPPING;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name]}
      style={style}
    />
  );
}
