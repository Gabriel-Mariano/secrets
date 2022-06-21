import React, { ReactNode } from "react";
import { TextInputProps } from "react-native";

interface IInputProps extends TextInputProps {
    label?:string;
    showPassword?:boolean;
    setShowPassword:React.Dispatch<React.SetStateAction<boolean>>;
    leftElement?:ReactNode;
    rightElement?:ReactNode;
    error?:string;
}

export { IInputProps }