import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { TriangleAlert } from "lucide-react";

export const FormAlert = ({ message }: { message?: string }) => {
  if (message) {
    return (
      <Alert variant='destructive'>
        <TriangleAlert />
        <AlertTitle>{message}</AlertTitle>
      </Alert>
    );
  }

  return null;
};
