/** @format */

import { Constants, Styles } from "@common";
import { Platform, Dimensions } from "react-native";
const { width} = Dimensions.get("window");

export default {
  fill: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#f4f4f4",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    overflow: "hidden",
    height: Constants.Window.headerHeight,
  },
  backgroundImage: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    width: null,
    height:
      Platform.OS === "ios"
        ? Constants.Window.headerHeight
        : Constants.Window.headerHeight + 100,
  },
  scrollView: {
    paddingTop: 20,
  },
  scrollViewContent: {
    position: "relative",
    marginBottom: 100,
  },

  image: {
    width: width - 30,
    height: 150,
    borderRadius: 9,
    overflow: 'hidden',
  },

  dim_layout: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    backgroundColor: "rgba(0,0,0,0.3)",
    height: Styles.width / 2 - 60,
    width: width
  },
  mainCategoryText: {
    color: "white",
    fontSize: 21,
    fontFamily: Constants.fontHeader,

    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: { width: 1, height: 1 },
  },
  numberOfProductsText: {
    color: "white",
    fontSize: 14,
    fontFamily: Constants.fontFamily,


    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
  },
  overlay: {
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  overlayDark: {
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  containerStyle: {
    shadowColor: "#59769C",
    backgroundColor: "transparent",
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowOffset: { width: 3, height: 6 },
    elevation: -4,
    paddingBottom: 10,
  },
  fab: {
    position: "absolute",
    overflow: "hidden",
    bottom: 15,
    right: 12,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "rgba(0, 0, 0, .85)",

    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  imageView: {
    borderRadius: 6, 
    width: width - 30,
    marginLeft: 15,
    height: 150,
    marginBottom: 30,
    borderRadius: 9,
    overflow: 'hidden',
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: width - 30
  },
};
