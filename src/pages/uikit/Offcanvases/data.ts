// types
import { BackdropOption, PlacementOption } from './types';

const backdropOptions: BackdropOption[] = [
    {
        name: 'Enable body scrolling',
        scroll: true,
        backdrop: false,
    },
    {
        name: 'Enable backdrop (default)',
        scroll: false,
        backdrop: true,
    },
    {
        name: 'Enable both scrolling & backdrop',
        scroll: true,
        backdrop: true,
    },
];

const placementOptions: PlacementOption[] = [
    {
        name: 'top',
        placement: 'top',
    },
    {
        name: 'right',
        placement: 'end',
    },
    {
        name: 'bottom',
        placement: 'bottom',
    },
    {
        name: 'left',
        placement: 'start',
    },
];

export { backdropOptions, placementOptions };
