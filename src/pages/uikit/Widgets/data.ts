// types
import { Contact } from '../../apps/Contacts/List/types';
import { Statistic } from './types';

// images
import avatar2 from '../../../assets/images/users/user-9.jpg';

const statisticsWidgets: Statistic[] = [
    {
        stats: 6599,
        title: 'Statistics',
        variant: 'primary',
    },
    {
        stats: 5894,
        title: 'Total Revenue',
        variant: 'pink',
    },
    {
        stats: 452,
        title: 'Sales Analytics',
        variant: 'warning',
    },
    {
        stats: 1254,
        title: 'Daily Sales',
        variant: 'info',
    },
];

const contact: Contact = {
    id: 2,
    avatar: avatar2,
    shortDesc:
        'Hi I am Johnathn Deo, has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
    name: 'Johnathan Deo',
    mobile: '(123) 123 1234',
    email: 'coderthemes@gmail.com',
    location: 'USA',
};

export { statisticsWidgets, contact };
