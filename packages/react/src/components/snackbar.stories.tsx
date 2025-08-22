import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./button.js";
import {
  Snackbar,
  SnackbarAction,
  SnackbarActions,
  SnackbarClose,
  SnackbarContent,
  SnackbarDescription,
  SnackbarProvider,
  SnackbarTitle,
} from "./snackbar.js";

const meta = {
  title: "Elements/Snackbar",
  component: Snackbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <SnackbarProvider>
        <div className="p-8">
          <Story />
        </div>
      </SnackbarProvider>
    ),
  ],
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Snackbar</Button>
        <Snackbar open={open} onOpenChange={setOpen}>
          <SnackbarContent>
            <SnackbarDescription>
              Your message has been sent!
            </SnackbarDescription>
            <SnackbarActions>
              <SnackbarClose />
            </SnackbarActions>
          </SnackbarContent>
        </Snackbar>
      </>
    );
  },
  args: {
    children: null,
  },
};

export const WithAction: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Action Snackbar</Button>
        <Snackbar open={open} onOpenChange={setOpen}>
          <SnackbarContent>
            <SnackbarDescription>File deleted successfully</SnackbarDescription>
            <SnackbarActions>
              <SnackbarAction
                altText="Undo delete"
                onClick={() => {
                  console.log("Undo clicked");
                  setOpen(false);
                }}
              >
                Undo
              </SnackbarAction>
              <SnackbarClose />
            </SnackbarActions>
          </SnackbarContent>
        </Snackbar>
      </>
    );
  },
  args: {
    children: null,
  },
};

export const WithTitle: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Titled Snackbar</Button>
        <Snackbar open={open} onOpenChange={setOpen}>
          <SnackbarContent>
            <div>
              <SnackbarTitle className="font-semibold">Success</SnackbarTitle>
              <SnackbarDescription>
                Your changes have been saved successfully.
              </SnackbarDescription>
            </div>
            <SnackbarActions>
              <SnackbarClose />
            </SnackbarActions>
          </SnackbarContent>
        </Snackbar>
      </>
    );
  },
  args: {
    children: null,
  },
};

export const Multiline: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Multiline Snackbar</Button>
        <Snackbar open={open} onOpenChange={setOpen} multiline>
          <SnackbarContent>
            <div>
              <SnackbarTitle className="font-semibold">Error</SnackbarTitle>
              <SnackbarDescription>
                There was an error processing your request. Please check your
                internet connection and try again.
              </SnackbarDescription>
            </div>
            <SnackbarActions>
              <SnackbarAction
                altText="Retry"
                onClick={() => {
                  console.log("Retry clicked");
                  setOpen(false);
                }}
              >
                Retry
              </SnackbarAction>
              <SnackbarClose />
            </SnackbarActions>
          </SnackbarContent>
        </Snackbar>
      </>
    );
  },
  args: {
    children: null,
  },
};

export const CustomDuration: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          Show Long Duration Snackbar (10s)
        </Button>
        <Snackbar open={open} onOpenChange={setOpen} duration={10000}>
          <SnackbarContent>
            <SnackbarDescription>
              This snackbar will stay open for 10 seconds.
            </SnackbarDescription>
            <SnackbarActions>
              <SnackbarClose />
            </SnackbarActions>
          </SnackbarContent>
        </Snackbar>
      </>
    );
  },
  args: {
    children: null,
  },
};

export const MultipleSnackbars: Story = {
  render: () => {
    const [snackbars, setSnackbars] = useState<
      { id: string; message: string }[]
    >([]);

    const addSnackbar = (message: string) => {
      const id = Math.random().toString(36).substring(2, 11);
      setSnackbars((prev) => [...prev, { id, message }]);
    };

    const removeSnackbar = (id: string) => {
      setSnackbars((prev) => prev.filter((s) => s.id !== id));
    };

    return (
      <>
        <div className="space-x-2">
          <Button onClick={() => addSnackbar("First notification")}>
            Add Snackbar 1
          </Button>
          <Button onClick={() => addSnackbar("Second notification")}>
            Add Snackbar 2
          </Button>
          <Button onClick={() => addSnackbar("Third notification")}>
            Add Snackbar 3
          </Button>
        </div>

        {snackbars.map(({ id, message }) => (
          <Snackbar
            key={id}
            open={true}
            onOpenChange={(open) => !open && removeSnackbar(id)}
          >
            <SnackbarContent>
              <SnackbarDescription>{message}</SnackbarDescription>
              <SnackbarActions>
                <SnackbarClose />
              </SnackbarActions>
            </SnackbarContent>
          </Snackbar>
        ))}
      </>
    );
  },
  args: {
    children: null,
  },
};
