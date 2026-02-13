declare module "react-google-recaptcha" {
  import { Component } from "react";

  export interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    theme?: "light" | "dark";
    size?: "compact" | "normal" | "invisible";
    tabindex?: number;
    onExpired?: () => void;
    onErrored?: () => void;
    className?: string;
    id?: string;
  }

  export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {
    execute(): void;
    executeAsync(): Promise<string>;
    reset(): void;
    getValue(): string | null;
  }
}