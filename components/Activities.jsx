import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import styles from "../styles/styles";

export const Activities = () => {
  const [showactvity, updateactivity] = useState([
    {
      url: "https://www.makemytrip.com/travel-guide/media/dg_image/udaipur/Puppet-Shows.jpg",
      name: "Puppet Show",
    },
    {
      url: "https://www.hikersadventurepark.com/wp-content/uploads/2023/09/Tandem-Zipline-300x300.webp",
      name: "Zip Lineing",
    },
    {
      url: "data:image/jpeg;base64,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",
      name: "Hot Air Ballon",
    },
    {
      url: "https://www.treebo.com/blog/wp-content/uploads/2018/01/Webp.net-compress-image-12-2-1024x551.jpg",
      name: "Trekking",
    },
    {
      url: "https://www.tourmyindia.com/blog//wp-content/uploads/2017/12/Best-Places-for-Shopping-in-Rajasthan.jpg",
      name: "Shopping",
    },
    {
      url: "https://www.fabhotels.com/blog/wp-content/uploads/2018/08/600x400-17-1200x900.jpg",
      name: "Eating",
    },
    {
      url: "https://indiathrills.com/wp-content/uploads/elementor/thumbs/JAISALMER-TENT-TARIFF-orn8d0ka3f571pduyate5pzcu01t4lenp5tnrxz89g.jpg",
      name: "Camping",
    },
    {
      url: "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/08/Chokhi-Dhani-Resort.jpg",
      name: "Chokhi Dhani",
    },
    {
      url: "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/08/Vintage-Car-Rally.jpg",
      name: "Vintage Car",
    },
  ]);
  return (
    <View>
      {/*Activities start*/}
      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "row",
          marginTop: 25,
        }}
      >
        <View
          style={{
            flexBasis: "10%",
            alignItems: "center",
          }}
        >
          <Entypo
            name="controller-fast-backward"
            size={30}
            color="#887700"
            style={{ marginTop: 15 }}
          />
        </View>
        <View style={{ flexBasis: "80%" }}>
          <Text style={styles.textstyle}>Must do Activities in rajasthan</Text>
        </View>
        <View style={{ flexBasis: "10%", alignItems: "center" }}>
          <Entypo
            name="controller-fast-forward"
            size={30}
            color="#887700"
            style={{ marginTop: 15 }}
          />
        </View>
      </View>
      {/** Activities end*/}
      {/*Category */}
      <View>
        <FlatList
          data={showactvity}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <View style={{ marginTop: 15 }}>
                <Image
                  source={{ uri: item.url }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                    resizeMode: "cover",
                    marginHorizontal: 5,
                    marginVertical: 5,
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      textAlign: "center",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      {/** End Category */}
    </View>
  );
};
