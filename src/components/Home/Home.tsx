import { Text } from "@chakra-ui/react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container-home">
        <Text fontFamily="fantasy" fontSize="8xl">
          Coleta de lixo eletronico
        </Text>
        <div className="subtitle">
          <Text fontFamily="fantasy" fontSize="4xl">
            Recicle seus dispositivos, renove o futuro: juntos pelo descarte
            consciente do lixo eletrônico!
          </Text>
        </div>
      </div>
    </>
  );
}

export default Home;
