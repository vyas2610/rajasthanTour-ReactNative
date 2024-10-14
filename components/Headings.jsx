import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

export const Headings = () => {
  const Navigation = useNavigation();
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
        <Pressable onPress={() => Navigation.navigate("explore_rajasthan")}>
          <View
            style={{
              flexBasis: "50%",
              // backgroundColor: "red",
              borderColor: "brown",
              borderWidth: 2,
              borderRadius: 10,
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
                // marginHorizontal: 5,
                // marginVertical: 5,
                margin: 5,
              }}
            />
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Explore Rajasthan
            </Text>
          </View>
        </Pressable>
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
