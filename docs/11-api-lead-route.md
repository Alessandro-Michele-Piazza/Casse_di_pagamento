# Lead API Route

## Endpoint

`POST /api/lead`

## Payload

```json
{
  "fullName": "Mario Rossi",
  "company": "Rossi Bar Srl",
  "phone": "3330000000",
  "email": "mario@example.com",
  "city": "Catania",
  "businessType": "Bar",
  "message": "Vorrei informazioni su VNE Virtuo 4",
  "privacy": true
}
```

## Behaviour

1. Validare payload con Zod
2. Salvare/trasmettere lead a CRM o webhook
3. Inviare notifica email interna
4. Restituire risposta JSON

## Response success

```json
{
  "ok": true,
  "message": "Richiesta inviata correttamente"
}
```

## Response error

```json
{
  "ok": false,
  "message": "Controlla i dati inseriti"
}
```
