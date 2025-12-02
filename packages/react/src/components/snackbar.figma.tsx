import { figma } from "@figma/code-connect";
import {
  Snackbar,
  SnackbarActions,
  SnackbarClose,
  SnackbarContent,
  SnackbarDescription,
} from "./snackbar.tsx";

figma.connect(
  Snackbar,
  "https://www.figma.com/design/qz52VrR2zMqD57VorqiLmw/Atomic-Playfulness---Test?node-id=540%3A10115",
  {
    props: {
      multiline: figma.enum("Variant", {
        "Multi Line": true,
      }),
    },
    example: (props) => (
      <Snackbar multiline={props.multiline}>
        <SnackbarContent>
          <SnackbarDescription>Your message has been sent!</SnackbarDescription>
          <SnackbarActions>
            <SnackbarClose />
          </SnackbarActions>
        </SnackbarContent>
      </Snackbar>
    ),
  },
);
