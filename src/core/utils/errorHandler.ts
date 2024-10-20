export const getErrorMessage = (e: unknown): string => {
  let message: string = "";

  if (typeof e === "string") {
    message = e.toUpperCase();
  } else if (e instanceof Error) {
    message = e.message;
  }

  return message;
};
