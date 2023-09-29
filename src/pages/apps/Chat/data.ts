// types
import { ChatMessage, ChatUser } from './types';

// images
import avatar1 from '../../../assets/images/users/user-1.jpg';
import avatar2 from '../../../assets/images/users/user-2.jpg';
import avatar3 from '../../../assets/images/users/user-3.jpg';
import avatar4 from '../../../assets/images/users/user-4.jpg';
import avatar5 from '../../../assets/images/users/user-5.jpg';
import avatar6 from '../../../assets/images/users/user-6.jpg';
import avatar7 from '../../../assets/images/users/user-7.jpg';

const users: ChatUser[] = [
    {
        id: 1,
        name: 'Margaret Clayton',
        avatar: avatar2,
        lastMessage: 'I have finished it! See you so...',
        lastMessageOn: '05 min',
        userStatus: 'online',
    },
    {
        id: 2,
        name: 'Jason Bent',
        icon: 'mdi mdi-account',
        variant: 'success',
        lastMessage: 'Hey! there I am available',
        lastMessageOn: '20 min',
        userStatus: 'online',
    },
    {
        id: 3,
        name: 'Mark Nieto',
        avatar: avatar3,
        lastMessage: 'This theme is awesome!',
        lastMessageOn: '32 min',
        lastMessageSeen: false,
        userStatus: 'offline',
    },
    {
        id: 4,
        name: 'Garret Sauer',
        avatar: avatar4,
        lastMessage: 'Nice to meet you',
        lastMessageOn: '01 hr',
        lastMessageSeen: false,
        userStatus: 'online',
    },
    {
        id: 5,
        name: 'Michael James',
        avatar: avatar5,
        lastMessage: 'Good morning',
        lastMessageOn: '01 hr',
        userStatus: 'offline',
    },
    {
        id: 6,
        name: 'Felicia Johnson',
        icon: 'mdi mdi-account',
        variant: 'primary',
        lastMessage: 'Meeting 10am',
        lastMessageOn: '02 hr',
        lastMessageSeen: false,
        userStatus: 'offline',
    },
    {
        id: 7,
        name: 'Tracy Marsh',
        avatar: avatar6,
        lastMessage: 'Hey! there I am available',
        lastMessageOn: '04 hr',
        userStatus: 'online',
    },
    {
        id: 8,
        name: 'Richard Lopez',
        avatar: avatar7,
        lastMessage: 'Nice to meet you',
        lastMessageOn: '05 hr',
        userStatus: 'offline',
    },
];

const messages: ChatMessage[] = [];

const defaultTo = {
    id: 9,
    name: 'Geneva M',
    avatar: avatar1,
};

for (const user of users) {
    messages.push(
        {
            id: 1,
            message: 'Hello!',
            to: defaultTo,
            from: user,
            sendOn: '10:00',
        },
        {
            id: 2,
            message: 'Hi, How are you? What about our next meeting?',
            to: user,
            from: defaultTo,
            sendOn: '10:01',
        },
        {
            id: 3,
            message: 'Yeah everything is fine',
            to: defaultTo,
            from: user,
            sendOn: '10:03',
        },
        {
            id: 4,
            message: '& Next meeting tomorrow 10.00AM',
            to: defaultTo,
            from: user,
            sendOn: '10:03',
        },
        {
            id: 5,
            message: 'Wow thats great',
            to: user,
            from: defaultTo,
            sendOn: '10:04',
        }
    );
}

export { users, messages };
