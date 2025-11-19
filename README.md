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

# Varustevahti API

Base URL (local):

- `http://127.0.0.1:8000`

Base URL (Rahti):

- `https://<your-rahti-host>`  <!-- replace with real host -->

The API is described using OpenAPI 3.1 and served automatically by FastAPI:

- Interactive docs (Swagger UI): `/docs`
- Static docs (ReDoc): `/redoc`
- OpenAPI schema (JSON): `/openapi.json`

---

## Items

### POST `/items/auto`

Create a new item automatically from an uploaded image.

- **Request body**: `multipart/form-data`

Fields:

| Field    | Type    | Required | Description                      |
|----------|---------|----------|----------------------------------|
| `file`   | binary  | yes      | Image file of the item          |
| `name`   | string  | yes      | Item name                       |
| `location` | string | no       | Where the item is stored        |
| `owner`  | string  | no       | Owner of the item               |

- **Response 200**: `ItemModel` (created item)
- **Response 422**: Validation error

---

### GET `/items/`

Get all items.

- **Response 200**: `ItemModel[]`

### POST `/items/`

Create a new item manually.

- **Request body**: `application/json` – `ItemBase`

Required fields in `ItemBase`:

- `name` (string)  
- `location` (string)  
- `desc` (string)  
- `owner` (string)  
- `category_id` (integer)  
- `group_id` (integer)

Optional:

- `image` (string \| null)  
- `size` (string \| null)  
- `on_market_place` (integer \| null, default 0)  
- `price` (number \| null)

- **Response 200**: `ItemModel`

---

### GET `/items/{item_id}`

Get a single item by ID.

- **Path params**: `item_id` (integer)
- **Response 200**: `ItemModel`

### PUT `/items/{item_id}`

Update an existing item.

- **Path params**: `item_id` (integer)
- **Request body**: `application/json` – `ItemUpdate` (all fields optional)
- **Response 200**: Updated `ItemModel`

### DELETE `/items/{item_id}`

Delete an item.

- **Path params**: `item_id` (integer)
- **Response 200**: empty JSON object

---

### GET `/items/category/{category_id}`

Get all items in a specific category.

- **Path params**: `category_id` (integer)
- **Response 200**: `ItemModel[]`

---

### GET `/items/group/{group_id}`

Get all items belonging to a specific group.

- **Path params**: `group_id` (integer)
- **Response 200**: `ItemModel[]`

---

### GET `/items/market`

Get all items that are currently posted to the marketplace.

- **Response 200**: `ItemModel[]`

---

### GET `/items/recent?limit={limit}`

Get most recent items.

- **Query params**:
  - `limit` (integer, optional, default `10`)
- **Response 200**: `ItemModel[]`

---

### POST `/items/{item_id}/post_to_market`

Post an item to the marketplace.

- **Path params**: `item_id` (integer)
- **Request body**: `application/x-www-form-urlencoded`

Fields:

| Field   | Type   | Required |
|---------|--------|----------|
| `price` | number | yes      |

- **Response 200**: Updated `ItemModel`

---

## Categories

### GET `/categories/`

List all categories.

- **Response 200**: `CategoryModel[]`

### POST `/categories/`

Create a new category.

- **Request body**: `application/json` – `CategoryBase`  
  - Required: `name` (string)

- **Response 200**: `CategoryModel`

---

## Groups

### GET `/groups/`

List all groups.

- **Response 200**: `GroupModel[]`

### POST `/groups/`

Create a new group.

- **Request body**: `application/json` – `GroupBase`  
  - Required: `name` (string)

- **Response 200**: `GroupModel`

