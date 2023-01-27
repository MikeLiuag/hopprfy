/** @format */

import { Platform, StyleSheet, Dimensions } from "react-native";
import { Constants } from "@common";

const { width, height } = Dimensions.get("window");
const vw = width / 100;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  toolbarIcon: {
    width: 17,
    height: 17,
    resizeMode: "contain",
    marginTop: 12,
    marginRight: 12,
    marginBottom: 12,
    marginLeft: 12,
    opacity: 0.8,
  },
  fill: {
    flex: 1,
    backgroundColor: "#ffffff",
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
  // logo: {
  //   width: vw * 30,
  //   resizeMode: "contain",
  // },
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
  toolbar: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 12 : 28,
    height: 32,
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    left: 7,
    right: 7,
    flexDirection: "row",
  },
  scrollViewContent: {
    marginTop: Constants.Window.headerHeight,
    position: "relative",
    marginBottom: 100,
  },
  columnStyle: {
    justifyContent: "space-between",
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  more: {
    width,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },

  //IMPORTED
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 9999,
    elevation: Platform.OS === "android" ? 50 : 0,
    color: "black",
  },

  spinView: {
    width,
    backgroundColor: "#fff",
    flex: 1,
    height,
    paddingTop: 20,
  },
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 9999,
    backgroundColor: "transparent",
    // borderBottomColor: 'none',
    // borderBottomWidth: 1,
    height: 40,
    justifyContent: "center",
  },
  contentContainer: {
    paddingTop: 40,
  },
  title: {
    color: "#333333",
  },
  row: {
    height: 300,
    width: null,
    marginBottom: 1,
    padding: 16,
    backgroundColor: "transparent",
  },
  rowText: {
    color: "white",
    fontSize: 18,
  },
  transparentTop: {
    backgroundColor: "transparent",
  },
  // RenderHedearListView
  header: {
    flexDirection: "row",
    marginBottom: 12,
    marginTop: 18,
    // backgroundColor: GlobalStyle.primaryColor.color,
  },
  headerLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 15,
  },
  headerRight: {
    flex: 1 / 3,
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 0,
    flexDirection: "row",
  },
  headerRightText: {
    fontSize: 11,
    marginRight: 0,
    marginTop: 0,
    color: "#666",
    fontFamily: Constants.fontFamily,
  },
  icon: {
    marginRight: 8,
    marginTop: 2,
    backgroundColor: "transparent",
  },
  tagHeader: {
    fontSize: 18,
    color: "#666",
    letterSpacing: 2,
    fontFamily: Constants.fontHeader,
  },

  headerLogo: {
    marginLeft: 20,

    ...Platform.select({
      ios: {
        paddingTop: 60,
      },
      android: {
        paddingTop: 60,
      },
    }),
  },
  headerDate: {
    fontSize: 14,
    fontWeight: "italic",
    color: "silver",
    paddingTop: 5,
    paddingLeft: 3,
    marginBottom: 0,
    fontWeight: "400",
    opacity: 0.8,
    fontFamily: Constants.fontFamily,
  },
  headerNetworkName: {
    fontSize: 18,
    fontWeight: "italic",
    color: "white",
    paddingTop: 5,
    paddingLeft: 3,
    marginBottom: 0,
    fontWeight: "800",
    opacity: 1,
    fontFamily: Constants.fontFamilyBold,
  },
  headerNetworkDescription: {
    fontSize: 12,
    color: "white",
    paddingTop: 5,
    paddingLeft: 3,
    marginBottom: 0,
    opacity: 1,
    fontFamily: Constants.fontFamily,
  },
  headerStore: {
    color: "#333",
    fontSize: 30,
    marginBottom: 10,
    fontFamily: Constants.fontFamily,
  },
  quickSearchField: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 30,
    alignItems: "center",
    paddingLeft: 16,
    flexDirection: "row",        
  },
  placeholderTextColor: {color:"rgba(255,255,255,0.4)"},  
  quickSearchLabel : {
    fontFamily: Constants.fontFamilyItalic,
    color: "rgba(255,255,255,0.4)",
    flexGrow: 1,
  },
  quickSearchClearButton: {
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
  },
  logo: {
    height: 84,
    maxHeight: 84,
    minWidth: 84,
    maxWidth:width *0.5,
    // borderWidth: 1,
    // borderColor: 'red',
    resizeMode: "contain",
  },
  //PICKER STYLE
  selectLabelTextStyle: {
    textShadowColor: "rgba(0, 0, 0, 0)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 0,
    color: "grey",
    textAlign: "left",
    width: "99%",
    // fontStyle: "italic",
    padding: 10,
    flexDirection: "row",
  },
  placeHolderTextStyle: {
    color: "#AAA",
    padding: 10,
    textAlign: "left",
    width: "100%",
    flexDirection: "row",
  },
  dropDownImageStyle: {        
    height:22,
    width:22,   
    alignSelf: "center",
  },
  pickerStyle: {
    marginLeft: 18,
    paddingRight: 25,
    marginRight: 10,
    marginBottom: 2,
    // shadowRadius: 1,
    // shadowOpacity: 1.0,
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    borderColor: "#303030",
    // shadowColor: "#303030",
    borderRadius: 5,
    elevation: 1,
    flexDirection: "row",
  },
});
