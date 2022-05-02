import { Box, Button, Heading, HStack } from "native-base";
import Image from "next/image";
import React from "react";
import { ConnectWallet } from "../Buttons/ConnectWallet";

export const Header = () => {
  return (
    <HStack
      bg="white"
      px="20"
      space={2}
      alignItems="center"
      py="16px"
      width="full"
    >
      <Heading size="l" mr="auto">
        Twinter
      </Heading>

      <Button
        leftIcon={
          <Image
            src="/assets/imgs/white-twitter.svg"
            objectFit="contain"
            width={18}
            height={18}
            alt="Twitter"
          />
        }
        bg="lightBlue.500"
        _hover={{ backgroundColor: "lightBlue.600" }}
      >
        Connect Twitter
      </Button>
      <ConnectWallet />
    </HStack>
  );
};
