import React, { useState, useRef } from "react";
import { Animated, SafeAreaView, Text } from "react-native";
import { styles } from "./styles"; // Certifique-se de incluir estilos atualizados
import GrupoSVG from "../../assets/img/Group.svg";
import GrupoSVG2 from "../../assets/img/Group2.svg";
import GrupoSVG3 from "../../assets/img/Group3.svg";
import { Button } from "../../components/Button";

const data = [
  {
    id: 1,
    SvgComponent: GrupoSVG,
    title: "Identifique a amêndoa",
    text: "Você pode tirar uma foto da amêndoa de cacau através da sua câmera.",
  },
  {
    id: 2,
    SvgComponent: GrupoSVG2,
    title: "Informações sobre a amêndoa",
    text: "Let's learn more about beautiful plants and read many articles about plants and gardening.",
  },
  {
    id: 3,
    SvgComponent: GrupoSVG3,
    title: "Gere seu certificado",
    text: "Now generate your certificate after analyzing the data.",
  },
];

export function IdentifyAlmonds() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      Animated.timing(translateX, {
        toValue: -300, // Move para a esquerda
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        translateX.setValue(300); // Reposiciona para o próximo
        setCurrentIndex(currentIndex + 1); // Atualiza o índice
        Animated.timing(translateX, {
          toValue: 0, // Volta para o centro
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    }
  };

  const { SvgComponent, title, text } = data[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[styles.animatedContainer, { transform: [{ translateX }] }]}
      >
        <SvgComponent width={300} height={300} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.textP}>{text}</Text>
      </Animated.View>
      <Button title="Próximo" onPress={handleNext} />
    </SafeAreaView>
  );
}
