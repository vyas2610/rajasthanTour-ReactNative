import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const Landsrj = () => {
  const [showdata, updatedata] = useState([
    {
      url: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Hotels-In-Rajasthan-cover-image_13th-jan.jpg",
      name: "Hotel",
    },
    {
      url: "https://curlytales.com/wp-content/uploads/2017/07/ge-gallery-3.jpg",
      name: "Trains",
    },
    {
      url: "https://static.toiimg.com/photo/90797416.cms",
      name: "Wild Life",
    },
    {
      url: "https://travelogyindia.b-cdn.net/storage/app/upload/mayo-collage.jpg",
      name: "Museum",
    },
  ]);

  return (
    <View>
      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "row",
          marginVertical: 10,
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
            style={{ marginTop: 5 }}
          />
        </View>
        <View style={{ flexBasis: "80%" }}>
          <Text style={styles.textstyle}>Explore the land of Rajasthan</Text>
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
      <View>
        <FlatList
          data={showdata}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <View style={styles.imageover}>
                <Image
                  source={{ uri: item.url }}
                  style={{
                    width: 160,
                    height: 150,
                    borderRadius: 5,
                    resizeMode: "cover",
                    marginHorizontal: 5,
                    marginVertical: 5,
                  }}
                />
                <View style={styles.imagetext}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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

export default Landsrj;
