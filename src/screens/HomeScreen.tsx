import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { FC } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { RootStackParamList } from "../../App";
import NavOptions from "../components/NavOptions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useAppDispatch } from "../store/hooks";
import { setDestination, setOrigin } from "../store/slices/navSlice";
import NavFavorites from "../components/NavFavorites";

interface IHomeScreen
  extends StackScreenProps<RootStackParamList, "HomeScreen"> {}

const HomeScreen: FC<IHomeScreen> = () => {
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          minLength={2}
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
