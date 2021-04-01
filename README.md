# Wortschatz Trainer
Dies ist der Wortschatz Trainer er hilft beim Vokabel Training.

Eine Version ist deployed auf http://wortschatz-trainer.s3-website.eu-central-1.amazonaws.com/

Das Projekt wurde mit [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6 generiert.

#### Kompatiblität
- Getestet mit Chrome und Firefox in der aktuellen Version Stand 31.03.2021.
- der Wortschatz Trainer ist Responsible, aber **nicht** auf dem Handy effektiv getestet.
## Prerequirements
- `NodeJS` version > `v14.16.0`,  NPM version > `6.14.11`
- `Angular` CLI version > `v11.2.6 `

*Es kann auch auf ältern Versionen laufen ist aber nicht getestet*

## Installation
Führe `npm install` aus um alle Abhängigkeiten zu laden

## Bibliotheken
- Es wird `PrimeNG` importiert um viele vordefinierten Stylings und Funktionen zu bekommen. Weitere Infos zu den PrimeNG Komponent gibt es hier: https://www.primefaces.org/primeng/showcase/
- `ChartJS` wird für die Prüfungsstatistik genutzt.
Weitere Infos dazu gibt es hier: https://www.primefaces.org/primeng/showcase/#/chart

## Development server
Starte `ng serve` oder `npm run start` für einen Development Server. Die URL erscheint dann auf der Konsole.

## Running unit tests

Starte `ng test` oder `npm run test` zum ausführen der unit tests via [Karma](https://karma-runner.github.io).

- es ist eine Chrome Installation für Karma auf dem Rechner notwendig

## Struktur
Der Code ist in drei Kernkomponenten aufgeteilt:

1. wordlist.component `(Wortliste / Erfassen)`
2. training.component `(Training)`
3. exam.component `(Prüfung)`


- wordpair.service: `Übernimmt die Verwaltung der aktuellen Wortliste und speichert nach jedem Update die Liste im Browser Storage.`

- menu.component: `Menu Komponente. Es wird per Angular Router zwischen den Komponenten geswitched.`


#### Bearbeitungszeit:
ca. 7h
#### Original Anforderungen und Ziele:
Erstelle eine Wortschatz-Trainer Applikation mit folgenden Funktionalitäten, welche in 3 Tabs angeordnet werden:

2.1 Erfassen
- Wortpaare alphabetisch sortiert auflisten `erfüllt`
- Wortpaare hinzufügen/bearbeiten/löschen `erfüllt`
- Button um Beispieldaten einzufüllen `erfüllt`
- Button um alles zurückzusetzen `erfüllt`
- Bonus: Die Liste der Worpaare können für beide Sprachen sortiert werden `erfüllt`
- Bonus: Wortliste persistieren (LocalStorage) `erfüllt`

2.2 Trainieren
- Es wird zufällig die eine oder andere Sprache abgefragt `erfüllt`
- Wörter werden zufällig ausgewählt `erfüllt`
- Nach falschen Antworten wird das korrekte Wort angezeigt `erfüllt`
- Bonus: Falsch beantwortete Wörter werden häufiger wieder abgefragt `nicht erfüllt`

2.3 Prüfung
- Während der Prüfung sind die Tabs Erfassen / Trainieren gesperrt `erfüllt`
- Es wird zufällig die eine oder andere Sprache abgefragt `erfüllt`
- Es werden in zufälliger Reihenfolge alle Wörter abgefragt `erfüllt`
- Nach der Prüfung wird das Prüfungsresultat und eine Statistik angezeigt `erfüllt`
- Bonus: Nötige Trefferquote und Anzahl der Wörter kann definiert werden `nicht erfüllt`
- Bonus: Die Prüfungsdauer kann limitiert werden `nicht erfüllt`

#### Weitere Gedanken
Zur Verbesserung könnte man:
- Eine Animation hinzufügen wenn im Training die Angabe korrekt war.
- Configuration in environment.ts
- Sprachauswahl der APP (i18n). 
- Unit Tests mit Headless Chrome
- Wortlisten in anderen Sprachen ermöglichen.
- Die Doku noch deutlich erweitern.
- Alle Bonus Ziele erfüllen.
- Auswählbare Sprachsets aus einem Backend laden.
- e2e Tests hinzufügen.


