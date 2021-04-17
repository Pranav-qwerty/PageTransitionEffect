import Highway from "@dogstudio/highway";
import Fade from "./transitons";

const H = new Highway.Core({
  transitions: {
    default: Fade,
  },
});
