import React, { useEffect, useState } from "react";
import SafeAreaCustom from "@components/safeArea";
import {
  Card,
  CircleIcon,
  Divider,
  HStack,
  Image,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  ScrollView,
  Text,
  VStack,
  View,
} from "@gluestack-ui/themed";
import { TextHeading } from "@components/textHeading";
import { Dimensions, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { IconCustom } from "@components/iconCustom";
import { useNavigation } from "@react-navigation/native";
import { Data, GetChosenHotel, TopLevel } from "./Interface";

interface GuestInterface {
  gender?: string;
  name?: string;
}
const BookingScreen = ({ route }) => {
  const { width, height } = Dimensions.get("window");
  const [radio, setRadio] = useState("Self");
  const navigation = useNavigation<any>();
  const [data, setData] = useState<Data>();
  const [newDataGuest, setNewDataGuest] = useState<GuestInterface[]>([
    { gender: "Tn", name: "Andreas Andreas" },
    {
      gender: "",
      name: "",
    },
  ]);
  console.log("newdata", route.params);
  useEffect(() => {
    const fetchHotels = async () => {
      const response = await fetch(
        "https://parseapi.back4app.com/classes/hotel/bVonXoSUHK",
        {
          method: "GET",
          headers: {
            "X-Parse-Application-Id":
              "Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3",
            "X-Parse-REST-API-Key": "4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setData(data.chosen_hotel.data);
    };
    fetchHotels();
    if (route.params?.data) {
      setNewDataGuest([
        ...route.params.data.filter(
          (guest) => guest.gender !== "" || guest.name !== ""
        ),
      ]);
    }
  }, [route.params?.data]);

  return (
    <SafeAreaCustom>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <VStack space="lg" paddingHorizontal={16} marginVertical={20}>
          <HStack space="sm" alignItems="center" justifyContent="flex-end">
            <HStack alignItems="center" space="sm">
              <View
                bgColor="$primary600"
                padding={14}
                borderRadius={"$full"}
                alignItems="center"
                justifyContent="center"
              >
                <TextHeading
                  style={{ color: "white", fontSize: 12, position: "absolute" }}
                >
                  1
                </TextHeading>
              </View>
              <Text bold size="sm">
                Detail Pesanan
              </Text>
            </HStack>
            <Divider borderWidth={0.5} width={10} />
            <HStack alignItems="center" space="sm">
              <View
                bgColor="$secondary300"
                padding={14}
                borderRadius={"$full"}
                alignItems="center"
                justifyContent="center"
              >
                <TextHeading
                  style={{ color: "white", fontSize: 12, position: "absolute" }}
                >
                  2
                </TextHeading>
              </View>
              <Text size="sm">Pembayaran</Text>
            </HStack>
          </HStack>
          <Divider my="$0.5" width={width} alignSelf="center" />
          <VStack space="md">
            <Text size="sm" bold>
              Detail Pesanan
            </Text>
            <View
              padding={14}
              borderRadius={10}
              borderWidth={0.5}
              borderColor="$secondary200"
              paddingRight={100}
            >
              <HStack space="md" alignItems="center">
                <Image
                  size="md"
                  borderRadius={10}
                  alt="image"
                  source={{
                    uri: "https://hotelimages.sunhotels.net/HotelInfo/hotelImage.aspx?id=11463978&full=1",
                  }}
                />
                <VStack space="xs">
                  <Text size="sm" color="$primary600" bold>
                    {data?.get_chosen_hotel.chosen_hotel_params.hotel_name}
                  </Text>
                  <Text size="xs" color="$secondary400">
                    {data?.get_chosen_hotel.chosen_hotel_room.room_name} with{" "}
                    {data?.get_chosen_hotel.chosen_hotel_room.meal}
                  </Text>
                  <Text size="xs" color="$secondary400">
                    1 Kamar • 2 Tamu • 10 Malam
                  </Text>
                </VStack>
              </HStack>
            </View>
            <HStack justifyContent="space-between" alignItems="center">
              <Text size="sm" bold>
                Check-In
              </Text>
              <Text color="$secondary400" size="xs">
                {data?.get_chosen_hotel.chosen_hotel_params.check_in}
              </Text>
            </HStack>
            <HStack justifyContent="space-between" alignItems="center">
              <Text size="sm" bold>
                Check-Out
              </Text>
              <Text color="$secondary400" size="xs">
                {data?.get_chosen_hotel.chosen_hotel_params.check_out}
              </Text>
            </HStack>
            <HStack alignItems="center" space="sm" justifyContent="flex-end">
              <Image
                w={20}
                h={20}
                borderRadius={10}
                alt="image"
                source={require("../../../assets/image/rupiah.png")}
              />
              <Text size="sm" color="$yellow500">
                Dapat direfund jika dibatalkan
              </Text>
            </HStack>
          </VStack>
          <Divider my="$0.5" width={width} alignSelf="center" />
          <VStack space="md">
            <Text size="sm" bold>
              Detail Pemesanan
            </Text>
            <View
              padding={14}
              borderRadius={10}
              borderWidth={0.5}
              borderColor="$secondary200"
            >
              <HStack justifyContent="space-between" alignItems="center">
                <VStack space="xs">
                  <Text size="sm" bold>
                    Tn. Andreas Andreas
                  </Text>
                  <Text size="xs" color="$secondary400">
                    andreasandreas@gmail.com
                  </Text>
                  <Text size="xs" color="$secondary400">
                    +62 89 2222 2222
                  </Text>
                </VStack>
                <TouchableOpacity>
                  <Text color="$primary500" size="sm">
                    Ubah
                  </Text>
                  <Divider borderWidth={0.5} borderColor="$primary500" />
                </TouchableOpacity>
              </HStack>
            </View>
            <View>
              <RadioGroup value={radio} onChange={setRadio}>
                <VStack space="md">
                  <Radio value="Self">
                    <RadioIndicator mr="$2">
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel size="sm">
                      Saya memesan untuk diri sendiri
                    </RadioLabel>
                  </Radio>
                  {radio === "Self" && (
                    <>
                      <View
                        padding={14}
                        borderRadius={10}
                        borderWidth={0.5}
                        borderColor="$secondary200"
                      >
                        <HStack alignItems="center" space="md">
                          <IconCustom
                            As={MaterialCommunityIcons}
                            name="face-man"
                            size={20}
                          />
                          <Text size="sm">Tn. Andreas Andreas</Text>
                        </HStack>
                      </View>
                    </>
                  )}
                  <Radio value="Guest">
                    <RadioIndicator mr="$2">
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel size="sm">
                      Saya memesan untuk orang lain
                    </RadioLabel>
                  </Radio>
                  {radio === "Guest" && (
                    <>
                      <Text size="sm" bold>
                        Data Tamu
                      </Text>
                      {newDataGuest.map((value, index) => (
                        <View
                          key={index}
                          padding={14}
                          borderRadius={10}
                          borderWidth={0.5}
                          borderColor="$secondary200"
                        >
                          <HStack alignItems="center" space="md">
                            <IconCustom
                              As={MaterialCommunityIcons}
                              name={
                                value?.gender === "Ny"
                                  ? "face-woman"
                                  : "face-man"
                              }
                              size={20}
                            />
                            <Text size="sm">
                              {value?.gender} {value?.name}
                            </Text>
                          </HStack>
                        </View>
                      ))}

                      <HStack justifyContent="flex-end">
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("StackNav", {
                              screen: "GuestScreen",
                              params: { data: newDataGuest },
                            })
                          }
                        >
                          <Text color="$primary500" size="sm">
                            Ubah Data Tamu
                          </Text>
                          <Divider
                            borderWidth={0.5}
                            borderColor="$primary500"
                          />
                        </TouchableOpacity>
                      </HStack>
                    </>
                  )}
                </VStack>
              </RadioGroup>
            </View>
          </VStack>
        </VStack>
      </ScrollView>
      <View paddingHorizontal={16} mb={16}>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            backgroundColor: "orange",
            padding: 15,
          }}
        >
          <TextHeading style={{ color: "white", textAlign: "center" }}>
            Next
          </TextHeading>
        </TouchableOpacity>
      </View>
    </SafeAreaCustom>
  );
};

export default BookingScreen;
