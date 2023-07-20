import { useToggle } from "react-use";

export default function useDarkLightMode() {
  const [currentMode, toggleMode] = useToggle(true);

  /**
   * Pas très malin de changer la signature d'une API externe
   *
   * @author Charles
   */
  return [currentMode, { toggleMode }];
}
