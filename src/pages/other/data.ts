// types
import { PricingPlan, Invoice } from './types';

const pricingPlans: PricingPlan[] = [
    {
        id: 1,
        name: 'Basic',
        price: 19,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: false,
    },
    {
        id: 1,
        name: 'Premium',
        price: 29,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: true,
    },
    {
        id: 2,
        name: 'Developer',
        price: 39,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: false,
    },
    {
        id: 3,
        name: 'Business',
        price: 49,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: false,
    },
];

const pricingPlans2: PricingPlan[] = [
    {
        id: 1,
        name: 'Basic',
        price: 19,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: false,
    },
    {
        id: 1,
        name: 'Premium',
        price: 29,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: true,
    },
    {
        id: 2,
        name: 'Developer',
        price: 39,
        duration: 'Month',
        features: ['5 Projects', '1 GB Storage', 'No Domain', '1 User', '24x7 Support'],
        isPopular: false,
    },
];

const invoiceDetails: Invoice = {
    invoice_id: '2016-04-23654789',
    customer: 'Stanley Jones',
    notes: 'Thanks a lot because you keep purchasing our products. Our company promises to provide high quality products for you as well as outstanding customer service for every transaction.',
    order_date: ' Jan 17, 2016',
    order_status: 'Pending',
    order_id: '#123456',
    address: {
        owner: 'Twitter, Inc.',
        line_1: '795 Folsom Ave, Suite 600',
        city: 'San Francisco',
        state: 'CA',
        zip: 94107,
        phone: '(123) 456-7890',
    },
    items: [
        {
            id: 1,
            name: 'LCD',
            description: 'Lorem ipsum dolor sit amet.',
            quantity: 1,
            unit_cost: '$380',
            total: '$380',
        },
        {
            id: 2,
            name: 'Mobile',
            description: 'Lorem ipsum dolor sit amet.',
            quantity: 5,
            unit_cost: '$50',
            total: '$250',
        },
        {
            id: 3,
            name: 'LED',
            description: 'Lorem ipsum dolor sit amet.',
            quantity: 2,
            unit_cost: '$500',
            total: '$1000',
        },
        {
            id: 4,
            name: 'LCD',
            description: 'Lorem ipsum dolor sit amet.',
            quantity: 3,
            unit_cost: '$300',
            total: '$900',
        },
        {
            id: 5,
            name: 'Mobile',
            description: 'Lorem ipsum dolor sit amet.',
            quantity: 5,
            unit_cost: '$80',
            total: '$400',
        },
    ],
    sub_total: 2930.0,
    discount: 12.9,
    vat: 12.9,
    total: 2930.0,
};

export { pricingPlans, pricingPlans2, invoiceDetails };
