import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import "./Cadastro.css";
import { useState } from "react";

function Cadastro() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [lixo, setLixo] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const handleCadastro = () => {
    if (!nome || !email || !telefone || !lixo || !dataHora) {
      toast({
        description: "Favor preencher todos os campos obrigatórios",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    onOpen();
  };

  const handleFecharModal = () => {
    setNome("");
    setEmail("");
    setTelefone("");
    setLixo("");
    setDataHora("");
    setObservacoes("");

    onClose();
  };

  return (
    <>
      <div className="container-form">
        <FormControl>
          <FormLabel>Nome *</FormLabel>
          <Input
            mb="2rem"
            variant="outline"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <FormLabel>Email *</FormLabel>
          <Input
            mb="2rem"
            variant="outline"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormLabel>Telefone *</FormLabel>
          <InputGroup>
            <InputLeftAddon>+55</InputLeftAddon>
            <Input
              mb="2rem"
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </InputGroup>
          <FormLabel>Lixo a ser descartado *</FormLabel>
          <Input
            mb="2rem"
            variant="outline"
            value={lixo}
            onChange={(e) => setLixo(e.target.value)}
            required
          />
          <FormLabel>Data e hora do descarte *</FormLabel>
          <Input
            size="md"
            type="datetime-local"
            mb="2rem"
            value={dataHora}
            onChange={(e) => setDataHora(e.target.value)}
            required
          />
          <FormLabel>Observações</FormLabel>
          <Textarea
            mb="2rem"
            variant="outline"
            maxHeight="120px"
            value={observacoes}
            onChange={(e) => setObservacoes(e.target.value)}
          />
          <div className="buttons">
            <Button
              colorScheme="red"
              size="md"
              mr="2rem"
              ml="2rem"
              onClick={() => window.location.reload()}
            >
              Cancelar
            </Button>
            <Button
              colorScheme="teal"
              size="md"
              mr="2rem"
              ml="2rem"
              onClick={handleCadastro}
            >
              Cadastrar
            </Button>
          </div>
        </FormControl>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Descarte cadastrado!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Seu descarte de lixo eletrônico foi cadastrado com sucesso.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleFecharModal}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Cadastro;
