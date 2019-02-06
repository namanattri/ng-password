export interface PasswordGeneratorFormInterface {
  uppercaseLetters: boolean;
  lowercaseLetters: boolean;
  numbers: boolean;
  symbols: boolean;
  arithmeticOperators: boolean;
  specialCharacters: boolean;
  uppercaseLettersMinLength: number;
  lowercaseLettersMinLength: number;
  numbersMinLength: number;
  symbolsMinLength: number;
  arithmeticOperatorsMinLength: number;
  specialCharactersMinLength: number;
  passwordLength: number;
}
