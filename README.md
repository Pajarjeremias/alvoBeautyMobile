# Käytetyt teknologiat

## Drawer & Stack navigaatio

Halusin käyttää kahta eri navigaatiota, koska sen toteutukseen löytyi kätevästi materiaalia. Lisäksi tein koko ohjelman aluksi pelkästään stack navigaatiolla, mutta etusivu muuttui äkkiä sekavaksi, joten halusin drawerin mukaan ja se toimi todella hyvin.

## WebView

Tämän avulla onnistui upottamaan Alvo Beautyn oman sivuston, about us ja ajanvarauksen, omaan mobiilisovellukseeni. Tämä helpottaa huomattavasti, varsinkin ajanvarauksen osalta.

## Toast

Tietyn mallinen pop-up notifikaatio komponentti, joka näyttää mielyttävältä. Toastit joutui luomaan jokaiseen tarvittavaan screeniin erikseen, vaihtuvan tekstin vuoksi ja tämä vähän pilaa koodin siisteyttä.

## Google Maps API

Rajapinta josta haen yrityksen sijainnin ja mahdollisuuden nappia painamalla siirtyä Google Mapsiin, ohjeita varten.

## Firebase

Googlen palvelin puolen ja sovellus kehitykseen käytetty alusta.

### Authentication

Firebasen käyttäjä autentikointi, huono puoli ettei tue käyttäjätunnuksella kirjautumista.

### Realtime Database

Yksi Firebasen monista tietokanta malleista, tähän pystyy päivittämään tiedot niin että ne ei poistu aina kun sovelluksesta poistuu

```mermaid
sequenceDiagram
    autonumber

    participant U as Käyttäjä
    participant FE as Expo Frontend (Mobile)
    participant BE as FastAPI Backend (Rahti)
    participant AI as AI_Model (open_clip + torch)
    participant DB as SQLite /workspace/varustevahti.db

    %% --- Normaali CRUD ---
    U ->> FE: Käyttäjä avaa sovelluksen
    FE ->> BE: GET /items/
    BE ->> DB: Hae kaikki itemit
    DB -->> BE: Item-lista
    BE -->> FE: 200 OK + JSON
    FE -->> U: Näyttää listan

    %% --- Uuden itemin lisäys ---
    U ->> FE: Täyttää itemin tiedot
    FE ->> BE: POST /items/
    BE ->> DB: Lisää uusi item
    DB -->> BE: OK
    BE -->> FE: 200 OK

    %% --- Kuvantunnistus (items/auto) ---
    U ->> FE: Valitsee kuvan (kamera / galleria)
    FE ->> BE: POST /items/auto (multipart image)

    BE ->> AI: Aktivoi open_clip -mallin<br>Kirjoittaa cacheen /workspace/.cache/torch
    AI ->> AI: Suorittaa mallin inferenssin
    AI -->> BE: Ennuste (category, gear-type)

    BE ->> DB: Tallentaa automaattisesti luodut tiedot
    DB -->> BE: OK
    BE -->> FE: 200 OK + ennustettu data

    FE -->> U: Näyttää automaattisesti tunnistetun varusteen

```
