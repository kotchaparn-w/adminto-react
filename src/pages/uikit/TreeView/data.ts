import { Tnode } from './types';

const basicNodes: Tnode[] = [
    {
        id: 1,
        text: 'Adminto',
        children: [
            {
                id: 2,
                text: 'Assets',
                children: [
                    {
                        id: 3,
                        text: 'Css',
                    },
                    {
                        id: 4,
                        text: 'Plugins',
                        children: [
                            { id: 5, text: 'Plugin one' },
                            { id: 6, text: 'Plugin two' },
                        ],
                    },
                ],
            },
            {
                id: 7,
                text: 'Email Template',
                children: [
                    { id: 8, text: 'Email one' },
                    { id: 9, text: 'Email two' },
                ],
            },
            {
                id: 10,
                text: 'Dashboard',
            },
            {
                id: 11,
                text: 'Typography',
            },
            {
                id: 12,
                text: 'User Interface',
                children: [
                    {
                        id: 13,
                        text: 'Buttons',
                    },
                    {
                        id: 14,
                        text: 'Cards',
                    },
                ],
            },
            {
                id: 15,
                text: 'Forms',
            },
            {
                id: 16,
                text: 'Tables',
            },
        ],
    },
    {
        id: 17,
        text: 'Frontend',
    },
];

const checkboxNodes: Tnode[] = [
    {
        id: 1,
        text: 'Adminto',
        children: [
            {
                id: 2,
                text: 'Assets',
                children: [
                    {
                        id: 3,
                        text: 'Css',
                    },
                    {
                        id: 4,
                        text: 'Plugins',
                        children: [
                            { id: 5, text: 'Plugin one' },
                            { id: 6, text: 'Plugin two' },
                        ],
                    },
                ],
            },
            {
                id: 7,
                text: 'Email Template',
                children: [
                    { id: 8, text: 'Email one' },
                    { id: 9, text: 'Email two' },
                ],
            },
            {
                id: 10,
                text: 'Dashboard',
            },
            {
                id: 11,
                text: 'Typography',
            },
            {
                id: 12,
                text: 'User Interface',
                children: [
                    {
                        id: 13,
                        text: 'Buttons',
                    },
                    {
                        id: 14,
                        text: 'Cards',
                    },
                ],
            },
            {
                id: 15,
                text: 'Forms',
            },
            {
                id: 16,
                text: 'Tables',
            },
        ],
    },
    {
        id: 17,
        text: 'Frontend',
    },
];

export { basicNodes, checkboxNodes };
