import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./button.js";
import { Modal, ModalClose, ModalContent, ModalTrigger } from "./modal.js";

const meta = {
  title: "Elements/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
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
      </>
    ),
  },
};

export const WithoutClose: Story = {
  args: {
    children: (
      <>
        <ModalTrigger>
          <Button>Open Modal (No Close)</Button>
        </ModalTrigger>
        <ModalContent
          title="Modal Without Close Button"
          description="This modal doesn't show the close button in the top-right corner."
          showClose={false}
          actions={
            <ModalClose asChild>
              <Button variant="secondary">Close</Button>
            </ModalClose>
          }
        >
          <p>You must use the Close button below to close this modal.</p>
        </ModalContent>
      </>
    ),
  },
};

export const MinimalModal: Story = {
  args: {
    children: (
      <>
        <ModalTrigger>
          <Button>Open Minimal Modal</Button>
        </ModalTrigger>
        <ModalContent>
          <p>This is a minimal modal with just content and the close button.</p>
        </ModalContent>
      </>
    ),
  },
};

export const ControlledModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Controlled Modal</Button>
        <Modal open={open} onOpenChange={setOpen}>
          <ModalContent
            title="Controlled Modal"
            description="This modal is controlled by external state."
            actions={
              <>
                <Button variant="secondary" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpen(false)}>Confirm</Button>
              </>
            }
          >
            <p>
              This modal's open state is controlled by a parent component's
              state.
            </p>
          </ModalContent>
        </Modal>
      </>
    );
  },
  args: {
    children: null,
  },
};
