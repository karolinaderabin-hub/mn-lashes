# Lash Atelier — React

Elegancka, jednostronicowa strona salonu stylizacji rzęs zbudowana w React + Vite.

## Uruchomienie

1. Zainstaluj Node.js (wersja LTS).
2. Otwórz terminal w folderze projektu.
3. Zainstaluj zależności:

   ```bash
   npm install
   ```

4. Uruchom lokalnie:

   ```bash
   npm run dev
   ```

5. Otwórz adres pokazany w terminalu (zwykle http://localhost:5173).

## Budowanie wersji produkcyjnej

```bash
npm run build
npm run preview
```

## Co warto spersonalizować przed publikacją

- Nazwę „Lash Atelier” i logo.
- Ceny, nazwy usług oraz czas trwania wizyt w `src/App.jsx`.
- Zdjęcia w tablicy `gallery` i adresy zdjęć w sekcji hero/o mnie.
- Prawdziwy numer telefonu, adres, godziny otwarcia i link do Instagrama.
- Przykładowe opinie — zastąp je opiniami klientek.

Zdjęcia w tym szablonie są pobierane z Unsplash, a fonty z Google Fonts, więc do ich wyświetlenia potrzebne jest połączenie z internetem.

## Struktura

```text
lash-studio-react/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```
