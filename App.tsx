import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Switch,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { FormInput } from './components/FormInput';
import { FormButton } from './components/FormButton';

export default function App() {
  // Campos do formulário
  const [petName, setPetName] = useState<string>('');
  const [ownerName, setOwnerName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [acceptNotifications, setAcceptNotifications] = useState<boolean>(false);

  // Mensagens de erro
  const [petNameError, setPetNameError] = useState<string>('');
  const [ownerNameError, setOwnerNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  // Controle do botão e do loading
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect 1: loading simulado de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // useEffect 2: monitora os campos e habilita/desabilita o botão
  useEffect(() => {
    const formValid =
      petName.trim().length >= 2 &&
      ownerName.trim().length >= 2 &&
      email.includes('@') &&
      email.includes('.');

    setCanSubmit(formValid);
  }, [petName, ownerName, email]);

  function handlePetNameChange(text: string) {
    setPetName(text);
    setPetNameError(text.trim().length < 2 ? 'Informe pelo menos 2 caracteres.' : '');
  }

  function handleOwnerNameChange(text: string) {
    setOwnerName(text);
    setOwnerNameError(text.trim().length < 2 ? 'Informe pelo menos 2 caracteres.' : '');
  }

  function handleEmailChange(text: string) {
    setEmail(text);
    setEmailError(text.includes('@') && text.includes('.') ? '' : 'E-mail inválido.');
  }

  function handleSubmit() {
    console.log('onSubmit', {
      petName,
      ownerName,
      email,
      acceptNotifications,
    });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={{ uri: 'https://placehold.co/120x120/png?text=PET' }}
          style={styles.logo}
        />
        <Text style={styles.title}>Cadastro de Pet</Text>

        {loading && <Text style={styles.loading}>Sistema Carregado...</Text>}

        <FormInput
          label="Nome do pet"
          placeholder="Ex: Thor"
          value={petName}
          onChangeText={handlePetNameChange}
          error={petNameError}
        />

        <FormInput
          label="Nome do tutor"
          placeholder="Ex: Maria Silva"
          value={ownerName}
          onChangeText={handleOwnerNameChange}
          error={ownerNameError}
        />

        <FormInput
          label="E-mail"
          placeholder="Ex: maria@email.com"
          value={email}
          onChangeText={handleEmailChange}
          error={emailError}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Receber notificações</Text>
          <Switch value={acceptNotifications} onValueChange={setAcceptNotifications} />
        </View>

        <FormButton title="Cadastrar" onPress={handleSubmit} disabled={!canSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingTop: StatusBar.currentHeight, // evita ficar sob a barra de status no Android
  },
  content: {
    padding: 24,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  loading: {
    textAlign: 'center',
    color: '#2563eb',
    marginBottom: 16,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  switchLabel: {
    fontSize: 16,
    color: '#374151',
  },
});