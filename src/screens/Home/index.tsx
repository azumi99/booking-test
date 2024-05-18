import React from "react";
import { Button, ButtonText, View } from "@gluestack-ui/themed";
import SafeAreaCustom from "@components/safeArea";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation<any>();

  return (
    <SafeAreaCustom>
      <View flex={1} paddingHorizontal={16}>
        <View flex={1} justifyContent="flex-end">
          <Button
            bottom={20}
            borderRadius={10}
            onPress={() =>
              navigation.navigate("StackNav", { screen: "BookingScreen" })
            }
          >
            <ButtonText>Booking</ButtonText>
          </Button>
        </View>
      </View>
    </SafeAreaCustom>
  );
};

export { HomeScreen };
