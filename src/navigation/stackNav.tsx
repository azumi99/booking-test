import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation, useRoute } from "@react-navigation/native";

import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { IconCustom } from "@components/iconCustom";
import { HomeScreen } from "@screens/Home";
import BookingScreen from "@screens/Booking";
import GuestScreen from "@screens/Booking/GuestScreen";
import ModalVerif from "@components/modalComponent";
import { BackConfirm } from "@config/store";

const Stack = createNativeStackNavigator();

export const StackNavigation = ({ route }) => {
  const navigation = useNavigation<any>();
  const dataRoute = useRoute<any>();
  const { setShowModal } = BackConfirm();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="BookingScreen"
        component={BookingScreen}
        options={{
          title: "Payment Details",
          headerBackVisible: false,
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#005DB4",
          },
          headerTitleStyle: {
            color: "white",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconCustom
                As={Ionicons}
                name="arrow-back"
                size={20}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="GuestScreen"
        component={GuestScreen}
        options={{
          title: "Tambah Data Tamu",
          headerBackVisible: false,
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#005DB4",
          },
          headerTitleStyle: {
            color: "white",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <IconCustom
                As={Ionicons}
                name="arrow-back"
                size={20}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
