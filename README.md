# Advanced Room Card (deutsche Fassung)

Lovelace-Karte, die Räume **nach Etage (Floor → Area)** gruppiert darstellt: pro Raum ein Icon,
Temperatur/Feuchte, Präsenz, sowie Schaltgruppen für **Lichter, Steckdosen, Covers und Fans**.
Alles über den Karten-Editor konfigurierbar, keine YAML nötig.

Dies ist ein **gepatchter Fork** von [Lawris/advanced-room-card](https://github.com/Lawris/advanced-room-card)
(GPL-3.0). Der Ordner enthält den fertigen Build (`advanced-room-card.js`) mit folgenden Änderungen
gegenüber dem Upstream:

- **Deutsche Oberfläche** (Editor und Statuszeilen)
- **Schaltgruppen pro Raum** (`control_groups`) mit eigenem Icon und Tippen = alle schalten
- **Steckdosen werden nicht mehr automatisch falsch erkannt**: Entitäten mit `entity_category`
  (`config`/`diagnostic`) werden bei der Bereichs-Erkennung übersprungen — sonst zählen
  WLED-Sync-Schalter, Echo-„Bitte nicht stören" oder PixelIt-„Automatic clock" als Steckdose
- **Manueller Modus pro Domäne** (`switch_manual`, `cover_manual`, …): eine gepflegte Liste
  ersetzt die Auto-Erkennung
- `fresh_threshold`, `room_height`, `show_controls`, `show_expand_button` als Stellschrauben

## Installation

### HACS (empfohlen)

1. HACS → ⋮ → **Benutzerdefinierte Repositories**
2. URL: `https://github.com/Pissbirne/advanced-room-card`, Kategorie **Dashboard**
3. Installieren, danach Browser-Cache leeren (die Karte ist ein ES-Modul)

### Manuell

`advanced-room-card.js` nach `/config/www/community/advanced-room-card/` kopieren und als
Lovelace-Ressource (Typ **JavaScript-Modul**) eintragen:

```
/local/community/advanced-room-card/advanced-room-card.js
```

## Konfiguration (Beispiel)

```yaml
type: custom:advanced-room-card
title: Räume
floors:
  - floor_id: erdgeschoss
    rooms:
      - area_id: wohnzimmer
        name: Wohnzimmer
        icon: mdi:sofa-outline
        temperature_entity: sensor.temperatur_wohnzimmer_temperatur
        humidity_entity: sensor.temperatur_wohnzimmer_luftfeuchtigkeit
        presence_entity: binary_sensor.bewegungsmelder_wohnzimmer
        light_entities:            # Liste gesetzt = manueller Modus
          - light.deckenlicht_wohnzimmer
        excluded_lights:
          - light.ambilight
        switch_manual: true        # WICHTIG: ohne dieses Flag wird switch_entities ignoriert
        switch_entities:
          - switch.shellyplug_s_7ae7e1
        tap_action:
          action: navigate
          navigation_path: /dashboard-neu/wohnzimmer
```

### Wichtig: manueller Modus braucht das `_manual`-Flag

`light_entities` allein schaltet den manuellen Modus ein. Bei allen anderen Domänen gilt:

| Domäne | Flag | Liste |
|---|---|---|
| switch | `switch_manual: true` | `switch_entities` |
| cover | `cover_manual: true` | `cover_entities` |
| fan | `fan_manual: true` | `fan_entities` |

Ohne das Flag wird **jeder** `switch.*` der Area genommen (minus `excluded_switches`).
Ist `switch_manual: true` gesetzt und die Liste leer, zeigt der Raum keine Steckdosen-Gruppe —
das ist der saubere Weg für Räume ohne echte Steckdose.

## Lizenz

GPL-3.0, siehe [LICENSE](LICENSE). Original: © Lawris und Mitwirkende.
