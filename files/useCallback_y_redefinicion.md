# 🔁 ¿Cuándo se redefine una función en React y cómo ayuda `useCallback`?

---

## 📌 ¿Qué significa "redefinir" una función?

En React (y React Native), **cada vez que un componente se renderiza, todas las funciones internas se crean de nuevo**.

### 🔄 Ejemplo:

```tsx
function MiComponente() {
  const handleClick = () => {
    console.log("click");
  };

  return <Boton onPress={handleClick} />;
}
```

➡️ En cada render de `MiComponente`, `handleClick` es una **nueva función (nueva referencia)**, aunque su contenido sea igual.

---

## ⚠️ ¿Por qué puede ser un problema?

Si pasas esa función como prop a un componente hijo **que está optimizado con `React.memo`**, entonces:

- React detecta un cambio en la prop (porque la función es nueva)
- El componente hijo se re-renderiza, **rompiendo la optimización**

---

## ✅ ¿Cómo ayuda `useCallback`?

`useCallback` **memoriza** la función y **solo la redefine si cambian sus dependencias**.

```tsx
const handleClick = useCallback(() => {
  console.log("click");
}, []);
```

Así:
- Se evita redefinir la función en cada render
- Se mantienen optimizadas las props en componentes hijos

---

## 📋 Ejemplo práctico con `FlatList`

### 🔴 Sin `useCallback` (problema):

```tsx
const renderItem = ({ item }) => <Item data={item} />;
<FlatList data={datos} renderItem={renderItem} />;
```

➡️ `renderItem` se redefine en cada render, causando re-renders en `Item`.

---

### ✅ Con `useCallback` (solución):

```tsx
const renderItem = useCallback(({ item }) => <Item data={item} />, []);
<FlatList data={datos} renderItem={renderItem} />;
```

✅ `renderItem` conserva su referencia → `Item` no se re-renderiza si no cambia `item`.

---

## 🎯 Casos comunes donde usar `useCallback`

- Pasar callbacks a componentes memorizados con `React.memo`
- Pasar funciones como `renderItem`, `keyExtractor`, `onPress`, etc.
- Usar funciones como dependencias en `useEffect`
- Cuando se usan muchos componentes que dependen de la misma función

---
