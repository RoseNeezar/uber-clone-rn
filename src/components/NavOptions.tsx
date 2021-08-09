import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

const data = [
  {
    id: "12",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "43",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{
                uri: item.image,
              }}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
