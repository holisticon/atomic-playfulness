import { figma } from "@figma/code-connect";
import { Button } from "./button.tsx";
import { Modal, ModalClose, ModalContent, ModalTrigger } from "./modal.tsx";

figma.connect(
  Modal,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=566%3A11197",
  {
    props: {},
    example: () => (
      <Modal>
        <ModalTrigger>
          <Button>Open Modal</Button>
        </ModalTrigger>
        <ModalContent
          title="Modal Title"
          description="This is a modal dialog description that explains what this modal is for."
          actions={
            <>
              <ModalClose asChild>
                <Button variant="secondary">Cancel</Button>
              </ModalClose>
              <Button>Confirm</Button>
            </>
          }
        >
          <p>Modal content goes here. You can put any React elements inside.</p>
        </ModalContent>
      </Modal>
    ),
  },
);
