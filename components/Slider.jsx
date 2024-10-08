import React from "react";
import { Image, View } from "react-native";

export const Slider = () => {
  return (
    <View>
      <View style={{ marginTop: 20 }}>
        <Image
          source={{
            uri: "https://www.andbeyond.com/wp-content/uploads/sites/5/north-india-jodhpur.jpg",
          }}
          style={{
            width: 340,
            height: 180,
            borderRadius: 5,
            resizeMode: "cover",
          }}
        />
      </View>
    </View>
  );
};
