import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "../styles/styles";

export const Headings = ({ navigation }) => {
  return (
    <View>
      <View style={styles.logo}>
        <Image
          source={{
            uri: "https://www.rajasthantoursoperatorindia.com/images/logo.png",
          }}
          style={{ width: 150, height: 150, resizeMode: "contain" }}
        />
      </View>
      {/** About Section start */}
      <View style={{ flex: 1, flexDirection: "row", paddingVertical: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ExploreRajasthan")}
        >
          <View
            style={{
              flexBasis: "50%",
              // backgroundColor: "red",
              borderColor: "red",
            }}
          >
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPA6gSz73nBJjeDzv3yV6XjnzSgqFOOOMzjQ&usqp=CAU",
              }}
              style={{
                width: 160,
                height: 150,
                borderRadius: 5,
                resizeMode: "cover",
                marginHorizontal: 5,
                marginVertical: 5,
              }}
            />
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Explore Rajasthan
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexBasis: "50%",
          }}
        >
          <Image
            source={{
              uri: "https://m.economictimes.com/thumb/msid-94806838,width-1000,height-656,resizemode-4,imgsize-41808/october-2022-festivals-when-is-dussehra-karva-chauth-diwali-chhath-bhai-dooj-govardhan-here-is-full-list.jpg",
            }}
            style={{
              width: 160,
              height: 150,
              borderRadius: 5,
              resizeMode: "cover",
              marginHorizontal: 5,
              marginVertical: 5,
            }}
          />
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Explore Festivals
          </Text>
        </View>
      </View>
    </View>
  );
};
