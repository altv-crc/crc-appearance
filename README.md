# [CRC][TS] Appearance

<sup>Supported by <a href="https://github.com/orgs/altv-crc/">CRC</a></sup>

Synchronize player, and pedestrian appearance based on a standardized `Appearance` interface.

<img src="https://i.imgur.com/XV7ZBam.png" width="250" />
 
## Installation

1. Create a folder in your `src` folder called `crc-appearance`.

2. Add the `TypeScript` files from this resource, to that folder.

3. Modify `server.toml` and ensure it loads whatever you named the folder.

In the case of the example above it should be `crc-appearance`.

```
resources = [ 
    'crc-db',
    'crc-native-menu',
    'crc-instructional-buttons',
    'crc-discord-login',
    'crc-appearance'
    'watch-resources'
]
```

_Your resource structure may vary_

## Developers

Appearance events share the same names.

However, you can only apply appearance to `pedestrians` on client-side.

Otherwise, use server-side event to apply appearance to actual players.

An event is emit when the appearance data has been applied to a player or ped.


### Server Events

#### crc-appearance-apply

Emit this when you want to synchronize player appearance on server-side.

```ts
alt.emit('crc-appearance-apply', somePlayer, someAppearanceData);
```

#### crc-appearance-updated

Listen to this event to see when a player's appearance has been updated.

```ts
alt.on('crc-appearance-updated', (somePlayer, someAppearanceData) => {});
```

### Client Events

#### crc-appearance-apply

Emit this when you want to synchronize ped appearance on client-side.

```ts
alt.emit('crc-appearance-apply', somePed, someAppearanceData);
```

#### crc-appearance-updated

Listen to this event to see when a player's appearance has been updated.

```ts
alt.on('crc-appearance-updated', (somePed, someAppearanceData) => {});
```