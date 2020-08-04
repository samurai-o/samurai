import { messageIcon } from ".";

export const message = {
  runner: (info: string) => `${messageIcon.RUNNER} ${info}`,
  success: (info: string) => `${messageIcon.CHECKMARK} ${info}`,
  error: (info: string) => `${messageIcon.CHECKERROR} ${info}`,
};
