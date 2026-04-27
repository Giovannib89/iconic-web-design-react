# Redux Toolkit - Guide d'utilisation

Redux Toolkit a été mis en place pour gérer l'état centralisé de l'application.

## Structure

```
src/
├── store/
│   ├── index.js (configuration du store)
│   └── slices/
│       └── uiSlice.js (états et actions UI)
```

## Actions disponibles

### UI Slice (`uiSlice.js`)

#### `setScrolled(boolean)`
Défini l'état de scroll de la page.
```javascript
dispatch(setScrolled(true))
```

#### `setActiveSection(string)`
Défini la section active de la page.
```javascript
dispatch(setActiveSection('services'))
```

#### `toggleNav()`
Bascule l'état du menu de navigation.
```javascript
dispatch(toggleNav())
```

#### `closeNav()`
Ferme le menu de navigation.
```javascript
dispatch(closeNav())
```

## Exemple d'utilisation

### Dans un composant
```javascript
import { useDispatch, useSelector } from "react-redux";
import { setScrolled } from "./store/slices/uiSlice";

export function MyComponent() {
  const dispatch = useDispatch();
  const scrolled = useSelector((state) => state.ui.isScrolled);

  useEffect(() => {
    const onScroll = () => dispatch(setScrolled(window.scrollY > 40));
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [dispatch]);

  return <div>{scrolled ? "Scrolled" : "Not scrolled"}</div>;
}
```

## Ajouter une nouvelle action

1. Ajouter un reducer dans `uiSlice.js`
2. Exporter l'action
3. Utiliser `useDispatch` et `dispatch` dans vos composants

## État initial du store

```javascript
{
  ui: {
    isScrolled: false,
    activeSection: "hero",
    isNavOpen: false
  }
}
```
