import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

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
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
