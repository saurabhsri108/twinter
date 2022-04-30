import { Box, Text } from "native-base";
import React from "react";

export const Footer = () => {
  return (
    <Box height="1/4" p="16" display="flex" justifyContent="center" bg="white">
      <Text textAlign="center">
        Copyright © Saurabh Srivastava (IBCoder) 2022
      </Text>
    </Box>
  );
};
