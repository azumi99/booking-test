import { BackConfirm } from "@config/store";
import {
  Button,
  Modal,
  Text,
  Center,
  ButtonText,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  Icon,
  CloseIcon,
  ModalBody,
  ModalFooter,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

const ModalVerif: React.FC = () => {
  const { showModal, setShowModal } = BackConfirm();
  console.log(showModal);
  const ref = React.useRef(null);
  const navigation = useNavigation<any>();
  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
      }}
      finalFocusRef={ref}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalBody>
          <Text textAlign="center">
            Jika kembali perubahan tidak akan disimpan, lanjut edit?
          </Text>
        </ModalBody>
        <ModalFooter alignItems="center" justifyContent="center">
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
            onPress={() => setShowModal(false)}
          >
            <ButtonText>Ya</ButtonText>
          </Button>
          <Button
            size="sm"
            action="negative"
            borderWidth="$0"
            onPress={() => {
              setShowModal(false);
              navigation.navigate("StackNav", { screen: "BookingScreen" });
            }}
          >
            <ButtonText>Tidak</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalVerif;
