# 📱 Prática de Implementação 1 — React Native

Chegou o momento de colocar à prova todos os conhecimentos adquiridos na disciplina até agora. Esta é a **Prática de Implementação 1**, que certifica você como um aprendiz de nível **Júnior** no React Native.

Nesta primeira atividade de integração, o desafio é construir a interface funcional de um **formulário de entrada de dados**. O objetivo não é apenas "desenhar" a tela, mas garantir que ela:

- reaja corretamente aos **estados**;
- **valide** informações em tempo real;
- gerencie seu próprio **ciclo de vida**.

---

## 🚩 O Desafio

Escolha um tema de sua preferência (ex: Cadastro de Pet, Login de Sistema de Finanças, Reserva de Quadra Esportiva, etc.) e desenvolva uma tela de formulário que siga rigorosamente os requisitos técnicos abaixo.

> **Tema escolhido:** Cadastro de Pet 🐶

---

## 🛠️ Requisitos Técnicos Obrigatórios

> Cada requisito vale **1 ponto**.

### 1. Layout Seguro e Rolável

O layout da tela deve utilizar componentes adequados para gerenciar áreas seguras (`SafeAreaView`) e rolagem de conteúdo (`ScrollView`), garantindo que o conteúdo seja acessível e rolável em telas menores e não fique sob a barra de status do dispositivo.

### 2. Ciclo de Vida (loading simulado)

Utilize um `useEffect` para exibir um aviso **"Sistema Carregado..."**. Ele deve sumir assim que a tela for montada (simule um loading de **2s** com `timeout`).

### 3. Identidade Visual

A tela deve conter uma `Image` (logo ou ilustração) que represente a temática escolhida.

### 4. Componente Reutilizável `FormInput`

Você deve criar e utilizar um componente `FormInput` que receba via props:

- `label`
- `error` (mensagem de erro)
- os eventos de alteração de texto

O funcionamento deste componente deve ser **idêntico ao `TextInput`**, acrescido de `label` e `error`.

### 5. Validação Visual

Caso um campo esteja inválido, o componente `FormInput` deve exibir a mensagem de erro em um `Text` com **cor destacada**.

### 6. Gerenciamento de Estado (`useState`)

O formulário deve ter **pelo menos 3 campos** de entrada. O estado deve controlar:

- os valores digitados;
- a visibilidade de mensagens de erro.

### 7. Switch

Inclua um `Switch` no formulário (ex: "Lembrar-me", "Aceito os termos" ou "Modo Noturno").

### 8. Componente Reutilizável `FormButton`

Utilize `Pressable` ou `TouchableOpacity` para criar um `FormButton` estilizado.

> ⚠️ **Não** utilize o componente `Button` nativo.

### 9. Efeito de Monitoramento (`useEffect`)

Implemente um `useEffect` que monitore os campos do formulário e **habilite/desabilite** o botão de submissão (`FormButton`).

**Exemplos:**

- validar se a senha tem o número mínimo de caracteres;
- validar se todos os campos obrigatórios foram preenchidos.

### 10. Ação de Submissão (log `onSubmit`)

Ao pressionar o botão de submissão (`FormButton`), deve ser exibido um **log no console** com os valores atuais de **todos os campos** do form, incluindo o `Switch`.

---

## 📦 Entrega

O código deve estar:

- ✅ organizado;
- ✅ em **TypeScript**;
- ✅ componentizado;
- ✅ com **separação de estilos**;
- ✅ seguindo a formatação e os padrões adotados nas aulas.

---

## 📁 Estrutura do Projeto

```
PraticaImplementacao1/
├── App.tsx
└── components/
    ├── FormInput.tsx
    └── FormButton.tsx
```

---

## ✅ Checklist de Requisitos

- [ ] 1. `SafeAreaView` e `ScrollView`
- [ ] 2. Loading simulado com `useEffect` (2s)
- [ ] 3. `Image` com a identidade visual
- [ ] 4. Componente `FormInput`
- [ ] 5. Validação visual com mensagem de erro
- [ ] 6. `useState` com pelo menos 3 campos
- [ ] 7. `Switch`
- [ ] 8. Componente `FormButton` (sem usar `Button`)
- [ ] 9. `useEffect` de monitoramento do botão
- [ ] 10. Log `onSubmit` com todos os valores