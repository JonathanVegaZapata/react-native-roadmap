import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../App';

jest.mock('@react-native-firebase/auth', () => ({
  __esModule: true,
  default: () => ({
    signInWithEmailAndPassword: jest.fn((email, password) => {
      if (email === 'test@demo.com' && password === '123456') {
        return Promise.resolve({ user: { email } });
      }
      return Promise.reject(new Error('Credenciales inválidas'));
    }),
  }),
}));

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
  const { Text } = require('react-native');
  return (props: any) => <Text testID={props.testID} />;
});

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }: any) => children,
}));

jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: () => ({
    Navigator: ({ children }: any) => children,
    Screen: ({ children }: any) => children,
  }),
}));

describe('App', () => {
  it('renderiza la pantalla de login por defecto', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    expect(getByText('Iniciar sesión')).toBeTruthy();
    expect(getByPlaceholderText('Correo electrónico')).toBeTruthy();
    expect(getByPlaceholderText('Contraseña')).toBeTruthy();
  });

  it('permite alternar la visualización de la contraseña', () => {
    const { getByPlaceholderText, getByTestId } = render(<App />);
    const passwordInput = getByPlaceholderText('Contraseña');
    const eyeIcon = getByTestId('eye-icon');
    expect(passwordInput.props.secureTextEntry).toBe(true);
    fireEvent.press(eyeIcon);
    expect(passwordInput.props.secureTextEntry).toBe(false);
  });

  it('muestra error si el login falla', async () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    fireEvent.changeText(getByPlaceholderText('Correo electrónico'), 'wrong@demo.com');
    fireEvent.changeText(getByPlaceholderText('Contraseña'), 'wrongpass');
    fireEvent.press(getByText('Ingresar'));
    await waitFor(() => {
      expect(getByText('Error')).toBeTruthy();
    });
  });

  it('navega al menú principal tras login exitoso', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<App />);
    fireEvent.changeText(getByPlaceholderText('Correo electrónico'), 'test@demo.com');
    fireEvent.changeText(getByPlaceholderText('Contraseña'), '123456');
    fireEvent.press(getByText('Ingresar'));
    await waitFor(() => {
      expect(queryByText('Bienvenido al menú principal')).toBeTruthy();
    });
  });
});