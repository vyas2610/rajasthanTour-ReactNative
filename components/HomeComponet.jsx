import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
} from "react-native";

import Landsrj from "./Landsrj";
import VideoRj from "./VideoRj";
import { Slider } from "./Slider";
import { Activities } from "./Activities";
import { Blogs } from "./Blogs";
import { Headings } from "./Headings";
function HomeComponet() {
  return (
    <ScrollView
      style={{
        paddingHorizontal: 22,
        backgroundColor: "#efefef",
      }}
    >
      <Headings />
      <Slider />

      <Landsrj />

      <VideoRj />
      <Activities />
      <Blogs />
    </ScrollView>
  );
}

export default HomeComponet;
