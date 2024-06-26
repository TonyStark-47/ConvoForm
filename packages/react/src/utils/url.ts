export const getAPIDomainUrl = (): string => {
  // If working on developing this package
  if (
    process.env.NEXT_PUBLIC_PACKAGE_ENV &&
    process.env.NEXT_PUBLIC_PACKAGE_ENV === "development"
  ) {
    return `http://localhost:3000`;
  }

  return "https://www.convoform.com";
};
