import React from "react";
import { ScrollView, Text, View } from "react-native";
import colors from "../../assets/colors";
import { Image } from "react-native";

const ExploreRaj = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#efefef",

        padding: 10,
      }}
    >
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvWy9yNoHJadOBz55wnDhcQulWTX3mNL33Q&s",
        }}
        style={{
          width: "100%",
          height: 250,
          resizeMode: "cover",
        }}
      />
      <ScrollView>
        <View
          style={{
            padding: 15,
            margin: 10,

            borderBottomColor: "black,",
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              textAlign: "justify",
              fontSize: 15,
              lineHeight: 30,
              marginBottom: 10,
            }}
          >
            Rajasthan is one of the most popular tourist destinations in India,
            for both domestic and international tourists. Rajasthan attracts
            tourists for its historical forts, palaces, art and culture with its
            slogan "Padharo Mhare Desh (Welcome to my land.)" The capital city,
            Jaipur, also known as Pink City, is a very popular tourist
            destination and is a part of the Golden Triangle. The Walled City of
            Jaipur is only the second Indian city to be recognized as a UNESCO
            World Heritage Site, after Ahmedabad.
          </Text>
          <Text
            style={{
              textAlign: "justify",
              fontSize: 15,
              marginBottom: 30,
              lineHeight: 30,
            }}
          >
            The palaces of Jaipur, lakes of Udaipur, and desert forts of
            Jodhpur, Bikaner, and Jaisalmer are among the most preferred
            destinations of many tourists, Indian and foreign. Tourism accounts
            for almost 15% of the state's domestic product. In 2019, 52 million
            domestic tourists visited Rajasthan.
          </Text>
          <Text
            style={{
              textAlign: "justify",
              fontSize: 15,
              lineHeight: 30,
            }}
          >
            The palaces of Jaipur, lakes of Udaipur, and desert forts of
            Jodhpur, Bikaner, and Jaisalmer are among the most preferred
            destinations of many tourists, Indian and foreign. Tourism accounts
            for almost 15% of the state's domestic product. In 2019, 52 million
            domestic tourists visited Rajasthan.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreRaj;
