import * as shared from 'alt-shared';

declare module 'alt-client' {
    interface ICustomEmitEvent {
        'crc-appearance-apply': (ped: number, data: shared.Appearance) => void;
        'crc-appearance-updated': (ped: number, data: shared.Appearance) => void;
    }
}
