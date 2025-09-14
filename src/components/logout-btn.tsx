import React from "react";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { signOut } from "@/auth";
import { LogOut } from "lucide-react";

const LogOutBtn = () => {
  return (
    <DropdownMenuItem
      onClick={() => {
        signOut();
      }}>
      <LogOut />
      Log out
    </DropdownMenuItem>
  );
};

export default LogOutBtn;
