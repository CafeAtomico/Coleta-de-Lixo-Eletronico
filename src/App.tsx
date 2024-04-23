import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "./App.css";
import Home from "./components/Home/Home";
import Sobre from "./components/Sobre/Sobre";
import Locais from "./components/Locais/Locais";
import Cadastro from "./components/Cadastro.tsx/Cadastro";

function App() {
  return (
    <div className="container">
      <Tabs variant="soft-rounded" colorScheme="gray" w="90vw">
        <TabList justifyContent="center">
          <Tab m="2rem" mt="1rem" fontSize="x-large">
            Inicio
          </Tab>
          <Tab m="2rem" mt="1rem" fontSize="x-large">
            Sobre
          </Tab>
          <Tab
            m="2rem"
            mt="1rem"
            fontSize="x-large"
            onClick={() => {
              window.dispatchEvent(
                new Event("resize")
              ); /* Está função resolve o problema do mapa aparecer cinza, sem ela, quando o mapa é inicializado,
                     um problema relacionado ao tamanho do mapa faz ele ficar todo cinza porém ao redimensionar a janela, o problema é resolvido,
                     portanto coloquei uma função que redimensiona a janela ao clicar na aba que exibe o mapa*/
            }}
          >
            Locais
          </Tab>
          <Tab m="2rem" mt="1rem" fontSize="x-large">
            Cadastro
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Home></Home>
          </TabPanel>
          <TabPanel>
            <Sobre></Sobre>
          </TabPanel>
          <TabPanel>
            <Locais></Locais>
          </TabPanel>
          <TabPanel display="flex" justifyContent="center">
            <Cadastro></Cadastro>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
