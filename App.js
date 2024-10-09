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

import Landsrj from "./components/Landsrj";
import VideoRj from "./components/VideoRj";
import { Slider } from "./components/Slider";
import { Activities } from "./components/Activities";
import { Blogs } from "./components/Blogs";
import { Headings } from "./components/Headings";

export default function App() {
  return (
    <ScrollView
      style={{
        paddingHorizontal: 22,
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
