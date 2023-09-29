// types
import { Post, Reminder, TeamMember } from './types';

// images
import avatar1 from '../../../../assets/images/users/user-1.jpg';
import avatar2 from '../../../../assets/images/users/user-2.jpg';
import avatar3 from '../../../../assets/images/users/user-3.jpg';
import avatar4 from '../../../../assets/images/users/user-4.jpg';
import avatar5 from '../../../../assets/images/users/user-5.jpg';
import avatar6 from '../../../../assets/images/users/user-6.jpg';
import avatar7 from '../../../../assets/images/users/user-7.jpg';

import img1 from '../../../../assets/images/small/img-1.jpg';
import img2 from '../../../../assets/images/small/img-2.jpg';
import img3 from '../../../../assets/images/small/img-3.jpg';

const members: TeamMember[] = [
    {
        avatar: avatar2,
        name: 'Michael Zenaty',
        designation: 'CEO',
    },
    {
        avatar: avatar3,
        name: 'James Neon',
        designation: 'Web Designer',
    },
    {
        avatar: avatar4,
        name: 'John Smith',
        designation: 'Web Developer',
    },
    {
        avatar: avatar5,
        name: 'Michael Zenaty',
        designation: 'Programmer',
    },
    {
        avatar: avatar6,
        name: 'Mat Helme',
        designation: 'Manager',
    },
];

const reminder: Reminder[] = [
    {
        variant: 'primary',
        title: 'Meet Manager',
        date: 'February 24, 2019',
        time: '10.30am to 12.45pm',
    },
    {
        variant: 'success',
        title: 'Project Discussion',
        date: 'February 25, 2019',
        time: '10.30am to 12.45pm',
    },
    {
        variant: 'info',
        title: 'Meet Manager',
        date: 'February 26, 2019',
        time: '10.30am to 12.45pm',
    },
    {
        variant: 'secondary',
        title: 'Project Discussion',
        date: 'February 27, 2019',
        time: '10.30am to 12.45pm',
    },
    {
        variant: 'danger',
        title: 'Meet Manager',
        date: 'February 28, 2019',
        time: '10.30am to 12.45pm',
    },
];

const posts: Post[] = [
    {
        avatar: avatar1,
        name: 'Adam Jansen',
        time: 'about 2 minutes ago',
        content: {
            message: 'Story based around the idea of time lapse, animation to post soon!',
            media: [img1, img2, img3],
        },
        comments: [
            {
                avatar: avatar3,
                name: 'John Smith',
                time: 'about 1 minutes ago',
                content: {
                    message: 'Wow impressive!',
                },
            },
            {
                avatar: avatar4,
                name: 'Matt Cheuvront',
                time: 'about 2 minutes ago',
                content: {
                    message: 'Wow, that is really nice.',
                },
                replies: [
                    {
                        avatar: avatar5,
                        name: 'Stephanie Walter',
                        time: 'about 3 minutes ago',
                        content: {
                            message: 'Nice work, makes me think of The Money Pit.',
                        },
                    },
                ],
            },
        ],
    },
    {
        avatar: avatar6,
        name: 'John Smith',
        time: 'about 4 minutes ago',
        content: {
            message: 'i am in the middle of a timelapse animation myself!(Very different though.) Awesome stuff.',
        },
    },
    {
        avatar: avatar7,
        name: 'Nicolai Larson',
        time: 'about 10 hour ago',
        content: {
            message: 'The parallax is a little odd but O.o that house build is awesome!!',
        },
    },
];

export { members, reminder, posts };
