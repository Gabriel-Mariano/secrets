import { PressableProps } from "react-native";

interface IButtonProps extends PressableProps{
    title:string;
    color?:string;
    background?:string;
}

export { IButtonProps };