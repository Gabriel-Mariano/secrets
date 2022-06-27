import React, { ReactNode } from "react";
import { TextInputProps } from "react-native";

interface IInputProps extends TextInputProps {
    label?:string;
    showPassword?:()=>void;
    leftElement?:ReactNode;
    rightElement?:ReactNode;
    error?:string;
}

export { IInputProps }