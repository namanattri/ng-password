export interface PasswordGeneratorFormInterface {
  useUppercaseLetters: boolean;
  useLowercaseLetters: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
  useArithmeticOperators: boolean;
  useSpecialCharacters: boolean;
  allowSpaces: boolean;

  uppercaseLetters: string;
  lowercaseLetters: string;
  numbers: string;
  symbols: string;
  arithmeticOperators: string;
  specialCharacters: string;

  passwordLength: number;
  
  allowRepeatingCharacters: boolean;
}
