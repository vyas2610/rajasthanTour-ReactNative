import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { Button } from "react-native";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import styles from "../styles/styles";

export const Blogs = () => {
  const [blogdata, updateblog] = useState([
    {
      title: "Rajasthan Blogs",
      url: "https://media.cntraveller.in/wp-content/uploads/2018/12/jaigarh-shutterstock_362195744.jpg",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like",
    },
    {
      title: "Rajasthan Blogs| 2",
      url: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/09/Feature-image-Rajasthan-fort.jpg",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like",
    },

    {
      title: "Rajasthan Blogs",
      url: "https://media.cntraveller.in/wp-content/uploads/2018/12/jaigarh-shutterstock_362195744.jpg",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like",
    },
    {
      title: "Rajasthan Blogs| 2",
      url: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/09/Feature-image-Rajasthan-fort.jpg",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like",
    },

    {
      title: "Rajasthan Blogs",
      url: "https://media.cntraveller.in/wp-content/uploads/2018/12/jaigarh-shutterstock_362195744.jpg",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like",
    },
    {
      title: "Rajasthan Blogs| 2",
      url: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/09/Feature-image-Rajasthan-fort.jpg",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like",
    },
  ]);
  return (
    <View>
      {/** Blogs section */}
      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "row",
          marginTop: 20,
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
            style={{ marginTop: 10 }}
          />
        </View>
        <View style={{ flexBasis: "80%" }}>
          <Text style={styles.textstyle}>Recent Posts</Text>
        </View>
        <View style={{ flexBasis: "10%", alignItems: "center" }}>
          <Entypo
            name="controller-fast-forward"
            size={30}
            color="#887700"
            style={{ marginTop: 10 }}
          />
        </View>
      </View>
      <View
        style={{
          paddingVertical: 6,
          paddingHorizontal: 5,
          borderColor: "#efefef",
          border: 1,
          borderRadius: 10,
        }}
      >
        <FlatList
          data={blogdata}
          horizontal={true}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  width: 300,
                  marginHorizontal: 5,

                  border: 3,
                  borderRadius: 2,
                  borderColor: "#efefef",
                  paddingVertical: 10,
                }}
              >
                <Text
                  style={{
                    marginHorizontal: 5,
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  {item.title}
                </Text>
                <Image
                  source={{ uri: item.url }}
                  style={{
                    width: "100%",
                    height: 150,
                    borderRadius: 5,
                    resizeMode: "cover",
                    marginVertical: 5,
                    marginLeft: 5,
                  }}
                />
                <Text
                  style={{
                    paddingHorizontal: 5,
                    lineHeight: 25,
                    textAlign: "justify",
                  }}
                >
                  {item.content}
                </Text>
                <Text
                  style={{
                    backgroundColor: "#efefef",
                    textAlign: "center",
                    padding: 10,
                    marginVertical: 10,
                  }}
                >
                  Read More
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
