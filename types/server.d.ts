import * as alt from 'alt-server';
import * as shared from 'alt-shared';

declare module 'alt-server' {
    interface ICustomEmitEvent {
        'crc-appearance-apply': (player: alt.Player, data: shared.Appearance) => void;
        'crc-appearance-updated': (player: alt.Player, data: shared.Appearance) => void;
    }
}
