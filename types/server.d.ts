import * as alt from 'alt-server';
import { Appearance } from 'alt-crc';

declare module 'alt-server' {
    interface ICustomEmitEvent {
        'crc-appearance-apply': (player: alt.Player, data: Appearance) => void;
        'crc-appearance-updated': (player: alt.Player, data: Appearance) => void;
    }
}
