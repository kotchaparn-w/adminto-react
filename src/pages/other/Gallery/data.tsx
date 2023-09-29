// types
import { GalleryItem } from './types';

// images
import img1 from '../../../assets/images/gallery/1.jpg';
import img2 from '../../../assets/images/gallery/2.jpg';
import img3 from '../../../assets/images/gallery/3.jpg';
import img4 from '../../../assets/images/gallery/4.jpg';
import img5 from '../../../assets/images/gallery/5.jpg';
import img6 from '../../../assets/images/gallery/6.jpg';
import img7 from '../../../assets/images/gallery/7.jpg';
import img8 from '../../../assets/images/gallery/8.jpg';
import img9 from '../../../assets/images/gallery/9.jpg';
import img10 from '../../../assets/images/gallery/10.jpg';
import img11 from '../../../assets/images/gallery/11.jpg';
import img12 from '../../../assets/images/gallery/12.jpg';

const gallery: GalleryItem[] = [
    {
        id: 1,
        image: {
            src: img1,
            caption: 'Screenshot-1',
        },
        title: 'Nature Image',
        category: ['natural', 'personal'],
    },
    {
        id: 2,
        image: {
            src: img2,
            caption: 'Screenshot-2',
        },
        title: 'Gallary Image',
        category: ['creative', 'personal', 'photography'],
    },
    {
        id: 3,
        image: {
            src: img3,
            caption: 'Screenshot-3',
        },
        title: 'Gallary Image',
        category: ['natural', 'creative'],
    },
    {
        id: 4,
        image: {
            src: img4,
            caption: 'Screenshot-4',
        },
        title: 'Gallary Image',
        category: ['personal', 'photography'],
    },
    {
        id: 5,
        image: {
            src: img5,
            caption: 'Screenshot-5',
        },
        title: 'Gallary Image',
        category: ['creative', 'photography'],
    },
    {
        id: 6,
        image: {
            src: img6,
            caption: 'Screenshot-6',
        },
        title: 'Gallary Image',
        category: ['natural', 'photography'],
    },
    {
        id: 7,
        image: {
            src: img7,
            caption: 'Screenshot-7',
        },
        title: 'Gallary Image',
        category: ['personal', 'photography', 'creative'],
    },
    {
        id: 8,
        image: {
            src: img8,
            caption: 'Screenshot-8',
        },
        title: 'Gallary Image',
        category: ['creative', 'photography', 'natural'],
    },
    {
        id: 9,
        image: {
            src: img9,
            caption: 'Screenshot-9',
        },
        title: 'Gallary Image',
        category: ['natural', 'personal'],
    },
    {
        id: 10,
        image: {
            src: img10,
            caption: 'Screenshot-10',
        },
        title: 'Gallary Image',
        category: ['photography', 'creative'],
    },
    {
        id: 11,
        image: {
            src: img11,
            caption: 'Screenshot-11',
        },
        title: 'Gallary Image',
        category: ['creative', 'photography'],
    },
    {
        id: 12,
        image: {
            src: img12,
            caption: 'Screenshot-12',
        },
        title: 'Gallary Image',
        category: ['natural', 'creative', 'personal'],
    },
];

export { gallery };
