import { Box, Button, Heading, HStack } from "native-base";
import Image from "next/image";
import React from "react";

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
      <Heading size="lg" mr="auto">
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
      <Button
        leftIcon={
          <Image
            alt="Metamask"
            src="/assets/imgs/metamask.svg"
            objectFit="cover"
            width={22}
            height={22}
          />
        }
        _hover={{ backgroundColor: "yellow.600" }}
        bg="yellow.500"
      >
        Connect MetaMask
      </Button>
    </HStack>
  );
};
