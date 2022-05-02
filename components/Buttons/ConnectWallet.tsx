import { InjectedConnector } from "@wagmi/core";
import { Button, useToast } from "native-base";
import Image from "next/image";

import React, { useEffect } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";

export const ConnectWallet = () => {
  const {
    connect,
    isError,
    isConnected,
    isConnecting,
    error,
    connectors: [metaMask],
  } = useConnect();
  const { data } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: data?.address });
  const { data: ensName } = useEnsName({ address: data?.address });
  const {
    disconnect,
    isLoading,
    isError: disconnectError,
    error: disconnectErrorMessage,
  } = useDisconnect();
  const { show } = useToast();
  useEffect(() => {
    if (isError && error) {
      show({
        title: "Something went wrong!",
        description: error.message,
        tintColor: "red.400",
      });
    }
  }, [error, isError]);

  useEffect(() => {
    if (disconnectError && disconnectErrorMessage) {
      show({
        title: "Something went wrong!",
        description: disconnectErrorMessage.message,
        tintColor: "red.400",
      });
    }
  }, [disconnectError, disconnectErrorMessage]);

  return (
    <Button
      isLoading={isConnecting || isLoading}
      isLoadingText="Please wait..."
      onPress={() => (!isConnected ? connect(metaMask) : disconnect())}
      isDisabled={!metaMask.ready}
      leftIcon={
        <Image
          alt="Metamask"
          src={ensAvatar || "/assets/imgs/metamask.svg"}
          objectFit="cover"
          width={22}
          height={22}
        />
      }
      _hover={{ backgroundColor: "yellow.600" }}
      bg="yellow.500"
    >
      {data?.address
        ? ensName || `#${data.address.slice(0, 6)}`
        : "Connect MetaMask"}
    </Button>
  );
};
