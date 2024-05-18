import React, { useEffect, useState } from "react";
import SafeAreaCustom from "@components/safeArea";
import {
  Button,
  ButtonText,
  Divider,
  HStack,
  ScrollView,
  Text,
  VStack,
  View,
} from "@gluestack-ui/themed";
import dataInterface from "@components/select/interface";
import { SelectComponent } from "@components/select";
import { InputDefault } from "@components/input/inputDefault";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { IconCustom } from "@components/iconCustom";
import { TouchableOpacity } from "react-native";
import { TextHeading } from "@components/textHeading";
import { useNavigation } from "@react-navigation/native";
import ModalVerif from "@components/modalComponent";

interface GuestInterface {
  gender?: string;
  genderIcon?: string;
  name?: string;
}
const GuestScreen = ({ route }) => {
  const navigation = useNavigation<any>();
  const [data, setData] = useState<GuestInterface[]>([]);

  console.log("logdata", data);
  const prefixData: dataInterface[] = [
    { label: "Tn", value: "Tn" },
    { label: "Ny", value: "Ny" },
  ];
  useEffect(() => {
    const fetchHotels = async () => {
      const response = await route.params;
      setData(response.data);
    };
    fetchHotels();
  }, []);
  const handleGenderChange = (value: string, index: number) => {
    const updatedData = [...data];
    updatedData[index].gender = value;
    setData(updatedData);
  };

  const handleNameChange = (value: string, index: number) => {
    const updatedData = [...data];
    updatedData[index].name = value;
    setData(updatedData);
  };

  const handleRemoveGuest = (index: number) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const handleAddGuest = () => {
    const newGuest: GuestInterface = { gender: "", name: "" };
    setData([...data, newGuest]);
  };
  return (
    <SafeAreaCustom>
      <ScrollView>
        <VStack
          flex={1}
          paddingHorizontal={16}
          marginVertical={20}
          space="md"
          mb={20}
        >
          <Text size="sm" bold color="$primary500">
            Data Tamu
          </Text>
          {data?.map((value, key) => (
            <HStack alignItems="center" space="md" key={key}>
              <SelectComponent
                width={"25%"}
                valueChange={(newValue) => handleGenderChange(newValue, key)}
                defaultValue={value.gender}
                data={prefixData}
              />
              <InputDefault
                changeText={(newValue) => handleNameChange(newValue, key)}
                width={"55%"}
                defaultValue={value.name}
              />
              <TouchableOpacity onPress={() => handleRemoveGuest(key)}>
                <View bgColor="$rose500" padding={10} borderRadius={10}>
                  <IconCustom
                    As={MaterialCommunityIcons}
                    name="trash-can"
                    size={20}
                    color="white"
                  />
                </View>
              </TouchableOpacity>
            </HStack>
          ))}

          <HStack justifyContent="center">
            <TouchableOpacity onPress={handleAddGuest}>
              <Text color="$yellow500" size="sm">
                + Tambah Data Tamu
              </Text>
              <Divider borderWidth={0.5} borderColor="$yellow500" />
            </TouchableOpacity>
          </HStack>
        </VStack>
      </ScrollView>
      <View paddingHorizontal={16}>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            backgroundColor: "orange",
            padding: 15,
          }}
          onPress={() =>
            navigation.navigate("StackNav", {
              screen: "BookingScreen",
              params: { data: data },
            })
          }
        >
          <TextHeading style={{ color: "white", textAlign: "center" }}>
            Simpan
          </TextHeading>
        </TouchableOpacity>
      </View>
      <ModalVerif />
    </SafeAreaCustom>
  );
};

export default GuestScreen;
