import { Alert, Box, Button, Heading, HStack, VStack } from "native-base";
import React from "react";
import { FormInput } from "../FormInput/FormInput";

export const Hero = () => {
  return (
    <Box py="20" px="20" flexDirection="row" justifyContent="space-between">
      <Box justifyContent="center" flex={1}>
        <Heading size="3xl">Mint your followers an NFT</Heading>
      </Box>
      <Box flex={1}>
        <VStack
          bg="white"
          borderWidth={1}
          borderColor="light.200"
          p="10"
          space="4"
          borderRadius="sm"
        >
          <FormInput
            label="Twitter Username"
            input={{
              placeholder: "@max02",
              borderRadius: "sm",
              size: "lg",
              rightElement: (
                <Button
                  borderTopLeftRadius="none"
                  borderBottomLeftRadius="none"
                >
                  Pick Image
                </Button>
              ),
            }}
          />

          <FormInput
            input={{ size: "lg" }}
            label="How many times should this be minted?"
          />
          <Alert flexDirection="row">
            <Alert.Icon mr="4" />
            This is the number of times the NFT will be minted on your behalf.
            This will cost money in MATIC! The followers will be counted from
            the next follow
          </Alert>

          <HStack space="2">
            <Button bg="red.600">I&apos;ve changed my mind!</Button>
            <Button bg="green.600">Let&apos;s mint!</Button>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};
