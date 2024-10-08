import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "Black",
    padding: 10,
  },
  logo: {
    alignItems: "center",
    paddingVertical: 15,
    marginTop: 2,
    flex: 1,
  },
  space: {
    flex: 1,
    paddingVertical: 5,
  },
  textstyle: {
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 5,
    textTransform: "uppercase",
  },
  imageover: {
    position: "relative",
  },
  imagetext: {
    position: "absolute",
    left: 50,
    top: 65,
  },
});
