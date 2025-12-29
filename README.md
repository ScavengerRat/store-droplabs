# React Shop - Zadanie Rekrutacyjne

Rozwiązanie zadania rekrutacyjnego polegającego na stworzeniu aplikacji sklepu internetowego z wykorzystaniem React, TypeScript oraz zewnętrznego API.

## 🚀 Demo
https://store-droplabs.netlify.app/

## 🛠 Tech Stack

Projekt został zrealizowany w oparciu o nowoczesne standardy i narzędzia:

- **Core:** React 19, TypeScript, Vite
- **Routing:** React Router DOM v7
- **State Management:** Redux Toolkit + Redux Persist
- **Styling:** Tailwind CSS + Shadcn/ui
- **Icons:** Lucide React
- **API:** FakeStoreAPI
- **Testing:** Vitest (testy jednostkowe koszyka)

## ✅ Zrealizowane funkcjonalności

### 1. Routing i Nawigacja
- [x] Routing dla stron: Home, Products.
- [x] Obsługa strony 404 (Not Found).
- [x] Główny Layout z nawigacją i koszykiem (badge).

### 2. Produkty (API & Data Fetching)
- [x] Pobieranie danych z wykorzystaniem **React Router Loaders** (Fetch API).
- [x] Obsługa stanów ładowania (Skeletons) dzięki `<React.Suspense>`.
- [x] **Error Handling**: Błędy pobierania listy produktów nie blokują całej aplikacji, a wyświetlają komunikat lokalnie (wewnątrz Layoutu).
- [x] Prezentacja produktów (zdjęcie, tytuł, cena, kategoria, ocena).
- [x] Strona główna z losowym produktem.

### 3. Sortowanie i Wydajność
- [x] Sortowanie produktów po cenie i nazwie (rosnąco/malejąco).
- [x] **Optymalizacja**: Zastosowano `shouldRevalidate` w konfiguracji routera, aby zmiana parametrów sortowania (URL Search Params) nie powodowała ponownego pobierania danych z API (Client-side sorting).
- [x] Custom Hook `useProductSort` do separacji logiki sortowania od widoku.

### 4. Koszyk (Redux)
- [x] Globalny stan koszyka zarządzany przez Redux Toolkit.
- [x] Dodawanie, usuwanie i zmiana ilości produktów.
- [x] Stan koszyka zachowany po odświeżeniu strony (Redux Persist).
- [x] Licznik produktów oraz cen.

### 5. Jakość i Testy
- [x] **Unit Testing:** Implementacja testów jednostkowych dla kluczowej logiki biznesowej koszyka (`cartSlice`) z wykorzystaniem **Vitest**.
- [x] Pokrycie przypadków brzegowych: dodawanie duplikatów, usuwanie ostatniej sztuki, czyszczenie koszyka, przeliczanie sumy całkowitej.

## Decyzje architektoniczne

W projekcie zastosowałem kilka wzorców, aby zapewnić skalowalność i dobry User Experience:

1.  **React Router (v7.11):** Wykorzystanie loaderów pozwala na rozpoczęcie pobierania danych równolegle z renderowaniem, co przyspiesza działanie aplikacji.
2.  **Pathless Routes & Error Boundaries:**
    * Zastosowałem `RootErrorBoundary` dla krytycznych błędów aplikacji.
    * Wykorzystałem komponent `<Await>` z `errorElement`, aby błędy API były obsługiwane lokalnie, nie niszcząc Layoutu strony.
3.  **Optymalizacja Search Params:** Sortowanie odbywa się poprzez URL (możliwość udostępnienia linku do posortowanej listy), ale bez zbędnych zapytań do serwera dzięki blokadzie rewalidacji loadera.
4.  **Struktura folderów:** Podział na `api`, `components` (ui / feature-based), `views`, `store`, `hooks` dla zachowania czystości kodu.

## Uruchomienie lokalne

Wymagany Node.js (wersja 24 zalecana).

1.  Sklonuj repozytorium:
    ```bash
    git clone https://github.com/ScavengerRat/store-droplabs.git
    cd store-droplabs
    ```

2.  Zainstaluj zależności:
    ```bash
    npm install
    ```

3.  Uruchom serwer:
    ```bash
    npm run dev
    ```
    
4. Uruchom testy jednostkowe::
    ```bash
    npm run test
    ```

5. Otwórz http://localhost:5173 w przeglądarce.


## 📂 Struktura projektu (Główne katalogi)

```bash
src/
├── api/             # Logika pobierania danych (loaders) i interfejsy
├── components/
│   ├── cart/        # Komponenty koszyka
│   ├── errors/      # Obsługa błędów (RootErrorBoundary, ErrorElement)
│   ├── navigation/  # Pasek nawigacji
│   ├── product/     # Komponenty produktów (ProductCard, Skeleton)
│   ├── ui/          # Komponenty biblioteki Shadcn (Button, Card, etc.)
│   └── layout.tsx   # Główny layout aplikacji
├── constants/       # Stałe (URL API, elementy menu)
├── hooks/           # Custom hooki (useProductSort)
├── lib/             # Funkcje pomocnicze (utils)
├── store/           # Konfiguracja Redux i Slice koszyka
└── views/           # Główne widoki stron (Home, Products, NotFound)
```