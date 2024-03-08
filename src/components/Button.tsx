import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { GlobalStyles } from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: Boolean;
    isGray?: boolean;
}

export default function Button({ title, onPress, isBlue, isGray }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            style={
                isBlue
                ? GlobalStyles.btnBlue
                : isGray
                ? GlobalStyles.btnGray
                : theme === "light"
                ?  GlobalStyles.btnLight
                : GlobalStyles.btnDark
            }

            onPress={onPress}
        >
            <Text
                style = {
                    isBlue || isGray ? GlobalStyles.smallTextLight
                    : theme === "dark"
                    ? GlobalStyles.smallTextLight
                    : GlobalStyles.smallTextDark
                }
            >
                {title}
            </Text>

        </TouchableOpacity>
    )

}


