import "./global.css"
import { Text, View } from "react-native";
import { CenteredView } from "./component/CenteredView";
import { CustomButton } from "./component/CustomButton";

export default function Index() {
  return (
    <CenteredView>
      <CustomButton title="Primary" variant="primary" size="md" onPress={() => alert("Primary Clicked!")} />
      <CustomButton title="Secondary" variant="secondary" size="lg" onPress={() => alert("Secondary Clicked!")} />
      <CustomButton title="Danger" variant="danger" size="sm" onPress={() => alert("DAnger Clicked!")} />

    </CenteredView> 
  );
}