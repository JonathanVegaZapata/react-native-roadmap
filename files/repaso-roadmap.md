# 📱 Roadmap para entrevista React Native Senior

## 🧠 1. Fundamentos y Core de React Native

### Fundamentos
- Ciclo de vida en componentes (`useEffect`)
- Hooks clave: `useState`, `useEffect`, `useCallback`, `useMemo`, `useRef`, `useContext`
- Navegación: `react-navigation` (stack, tabs, drawers, deep linking)
- Gestión del estado: `Redux Toolkit`, `Zustand`, `Context API`

### Interfaz y Rendimiento
- `FlatList`, `SectionList` optimizados
- Animaciones: `Animated`, `Reanimated 2`
- Gestos con `react-native-gesture-handler`
- Formularios: `react-hook-form`, `Yup`
- Manejo eficiente de imágenes (`FastImage`, caching)

---

## 🏗️ 2. Arquitectura y Buenas Prácticas

### Arquitectura
- Arquitectura por capas (presentation, domain, data)
- Patrones MVVM / Clean Architecture
- Modularización y escalabilidad
- Monorepos (Nx, Turborepo)

### Buenas prácticas
- Componentes reutilizables y diseño atómico
- TypeScript estricto (tipos genéricos, discriminated unions)
- Manejo de errores centralizado
- Seguridad de credenciales (dotenv, Keychain/Keystore)

---

## 🧪 3. Testing en React Native

### Unit Testing
- `Jest`: configuración, mocks de navegación y APIs
- Test de hooks personalizados
- Test de UI con `@testing-library/react-native`

### E2E y Automatización
- `Detox`: setup, flujos comunes
- `Appium`: arquitectura, flujos básicos
- Mocks de Firebase o SQLite para integración

---

## ☁️ 4. Servicios Cloud y APIs

### Firebase
- Autenticación (email, Google, Apple)
- Firestore vs Realtime DB
- Cloud Functions (invocación desde RN)
- FCM Push Notifications

### Azure / Otros
- Azure AD B2C (OAuth2/OpenID)
- Azure Storage / API Management
- APIs REST y GraphQL

---

## 🛠️ 5. Preparación técnica y entrevistas en vivo

### Práctica
- Mini app con login + navegación + test
- Funciones técnicas en vivo (debounce, validaciones)
- Piensa en voz alta, explica decisiones

### Preguntas frecuentes
- ¿Cómo optimizas el rendimiento en RN?
- ¿Qué problemas tuviste con iOS/Android?
- ¿Cómo manejas fallos de seguridad?
- ¿Qué herramientas usas para monitoreo de errores?

---

## 🎓 Recursos útiles
- [React Native Docs](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Detox](https://wix.github.io/Detox/)
- [Jest](https://jestjs.io/)
- [React Native Firebase](https://rnfirebase.io/)
- [React TS Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)