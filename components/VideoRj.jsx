import React from "react";
import { Image, View } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const VideoRj = () => {
  return (
    <View>
      <View styles={{}}>
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

export default VideoRj;
