import { Appearance } from 'alt-crc';

declare module 'alt-client' {
    interface ICustomEmitEvent {
        'crc-appearance-apply': (ped: number, data: Appearance) => void;
        'crc-appearance-updated': (ped: number, data: Appearance) => void;
    }
}
