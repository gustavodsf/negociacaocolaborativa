"use client"
import { ChatContainer } from "@/components/ChatContainer";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Bot } from "lucide-react";


export const AIModal = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return(
    <>
      <Button onPress={onOpen} className="absolute bottom-0 left-0 m-3">
        <Bot />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="w-[60rem] h-[40rem]">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Converse com a nossa IA</ModalHeader>
              <ModalBody className="overflow-scroll">
                <ChatContainer />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}