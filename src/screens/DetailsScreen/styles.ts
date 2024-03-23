import { WiP } from "helpers";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: WiP(93),
    height: 300,
    borderRadius: 10,
  },
  imageText: {
    marginTop: 10,
    color: '#757575',
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },
});
export default styles;
