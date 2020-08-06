import ora from "ora";

export function Loading(message: string) {
  return ora({
    text: message,
    spinner: { frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"] },
  });
}
