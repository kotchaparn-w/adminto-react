// types
import { CardGroupItem } from './types';

// images
import cardImg1 from '../../../assets/images/gallery/8.jpg';
import cardImg2 from '../../../assets/images/gallery/9.jpg';
import cardImg3 from '../../../assets/images/gallery/10.jpg';

const CardGroupDetails: CardGroupItem[] = [
    {
        id: 1,
        image: cardImg1,
        title: 'Card title',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        subtext: 'Last updated 3 mins ago',
    },
    {
        id: 2,
        image: cardImg2,
        title: 'Card title',
        text: 'This card has supporting text below as a natural lead-in to additional content.',
        subtext: 'Last updated 3 mins ago',
    },
    {
        id: 3,
        image: cardImg3,
        title: 'Card title',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
        subtext: 'Last updated 3 mins ago',
    },
];

export { CardGroupDetails };
