# Dokumentacja techniczna – Task Manager

## 1. Wykorzystane technologie

- HTML5 – struktura aplikacji
- CSS3 – stylizacja (Flexbox, Media Queries)
- JavaScript (ES6) – logika aplikacji
- LocalStorage – przechowywanie danych po stronie klienta

## 2. Architektura aplikacji

Aplikacja ma architekturę typu Frontend-only (Client-Side Application).

Struktura logiczna:

- Warstwa prezentacji → HTML + CSS
- Warstwa logiki → JavaScript
- Warstwa danych → LocalStorage

Dane przechowywane są jako tablica obiektów w LocalStorage:

javascript
{
  id: number,
  name: string,
  priority: string,
  completed: boolean
}

Renderowanie odbywa się dynamicznie poprzez manipulację DOM.

## 3. API Endpoints
Nie dotyczy – aplikacja nie korzysta z zewnętrznego API.

## 4. Struktura bazy danych
Aplikacja nie wykorzystuje zewnętrznej bazy danych.

Dane przechowywane są w LocalStorage przeglądarki
w formacie JSON pod kluczem:

tasks

## 5. Proces powstawania projektu

| Etap | Opis                    | Czas      |
| ---- | ----------------------- | -------   |
| 1    | Projekt struktury HTML  | 30 minut  |
| 2    | Stylizacja CSS          | 2 godziny |
| 3    | Implementacja logiki JS | 4 godziny |
| 4    | LocalStorage            | 1 godzina |
| 5    | Testowanie i poprawki   | 30 minut  |
