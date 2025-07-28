# 🔁 Guía de Hooks clave en React Native

---

## 🧠 useState

**¿Qué hace?**  
Permite manejar variables de estado en componentes funcionales.

**📌 Uso típico:** Formularios, flags, inputs.

```tsx
const [email, setEmail] = useState('');
```

---

## ⏱ useEffect

**¿Qué hace?**  
Ejecuta efectos secundarios (side effects) como fetch de datos, suscripciones, etc.

**📌 Uso típico:** Llamadas a APIs, listeners, temporizadores.

```tsx
useEffect(() => {
  fetchData();
}, []);
```

---

## 🔁 useCallback

**¿Qué hace?**  
Memoriza una función para que no se redefina entre renders.

**📌 Uso típico:** Evitar renders innecesarios al pasar funciones como props.

```tsx
const handleClick = useCallback(() => {
  console.log("Click");
}, []);
```

---

## 📦 useMemo

**¿Qué hace?**  
Memoriza el resultado de una función costosa, recalcula solo si cambian sus dependencias.

**📌 Uso típico:** Optimizar cálculos derivados como filtros o sumatorias.

```tsx
const citasFuturas = useMemo(() => {
  return citas.filter(c => c.fecha > Date.now());
}, [citas]);
```

---

## 📍 useRef

**¿Qué hace?**  
Permite crear una referencia mutable que no causa re-render al cambiar.

**📌 Uso típico:** Acceder a elementos nativos, almacenar IDs o valores entre renders.

```tsx
const inputRef = useRef<TextInput>(null);
```

---

## 🌐 useContext

**¿Qué hace?**  
Permite consumir valores globales desde un `Context` sin prop drilling.

**📌 Uso típico:** Manejo global de auth, temas, configuraciones.

```tsx
const { user } = useContext(AuthContext);
```

---

# 🎤 Preguntas frecuentes en entrevistas

---

### ❓ ¿Cuándo usarías `useMemo` vs `useCallback`?

`useMemo` memoriza un **valor calculado**, mientras que `useCallback` memoriza una **función**.

**✅ Uso común:**
- `useMemo`: cálculos costosos → evitar re-cálculo
- `useCallback`: funciones pasadas como props → evitar renders innecesarios

---

### ❓ ¿Diferencia entre `useRef` y `useState`?

- `useState`: provoca **re-render** cuando cambia
- `useRef`: **no provoca** re-render, útil para valores persistentes entre renders

---

### ❓ ¿Cómo evitas renders innecesarios con estos hooks?

- `useMemo`: para memorizar valores derivados
- `useCallback`: para memorizar funciones
- `useRef`: para guardar datos sin render
- `React.memo`: para evitar renders innecesarios en componentes hijos

---
