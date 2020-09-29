/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace JSX {
    interface IntrinsicElements {
        'ion-icon': {
            readonly name: string;
            readonly ios?: string;
            readonly md?: string;
            readonly size?: 'small' | 'large';
        };
    }
}