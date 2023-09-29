// types
import { KanbanBoardTask } from './types';

// images
import avatar1 from '../../../../assets/images/users/user-1.jpg';
import avatar2 from '../../../../assets/images/users/user-2.jpg';
import avatar3 from '../../../../assets/images/users/user-3.jpg';
import avatar4 from '../../../../assets/images/users/user-4.jpg';
import avatar5 from '../../../../assets/images/users/user-5.jpg';
import avatar6 from '../../../../assets/images/users/user-6.jpg';
import avatar7 from '../../../../assets/images/users/user-7.jpg';
import avatar8 from '../../../../assets/images/users/user-8.jpg';
import avatar9 from '../../../../assets/images/users/user-9.jpg';
import avatar10 from '../../../../assets/images/users/user-10.jpg';

const tasks: KanbanBoardTask[] = [
    {
        id: 1,
        title: 'Improve animation loader',
        status: 'Upcoming',
        priority: 'Urgent',
        userAvatar: avatar1,
        userName: 'Latasha B. Seibel',
        task: 5,
        comment: 3,
    },
    {
        id: 2,
        title: 'Write a release note for Admin v1.5',
        status: 'Upcoming',
        priority: 'High',
        userAvatar: avatar2,
        userName: 'Janie R. Pinheiro',
        task: 2,
        comment: 4,
    },
    {
        id: 3,
        title: 'Invite user to a project',
        status: 'Upcoming',
        userAvatar: avatar3,
        userName: 'Brian M. Behrens',
        task: 9,
        comment: 5,
    },
    {
        id: 4,
        title: 'Code HTML email template for welcome email',
        status: 'Upcoming',
        priority: 'Urgent',
        userAvatar: avatar4,
        userName: 'Keith S. Lindstrom',
        task: 6,
        comment: 9,
    },
    {
        id: 5,
        title: 'File Uploads on Cards',
        status: 'Inprogress',
        priority: 'Urgent',
        userAvatar: avatar5,
        userName: 'Russell H. Benson',
        task: 2,
        comment: 4,
    },
    {
        id: 6,
        title: 'Enable analytics tracking',
        status: 'Inprogress',
        priority: 'High',
        userAvatar: avatar6,
        userName: 'Jacquelyn R. Oleary',
        task: 5,
        comment: 3,
    },
    {
        id: 7,
        title: 'Improve animation order',
        status: 'Inprogress',
        userAvatar: avatar7,
        userName: 'John A. Sherrill',
        task: 8,
        comment: 6,
    },
    {
        id: 8,
        title: 'Improve animation order',
        status: 'Completed',
        priority: 'Urgent',
        userAvatar: avatar8,
        userName: 'Jamie D. Schwartz',
        task: 1,
        comment: 3,
    },
    {
        id: 9,
        title: 'Write a release note for Admin v1.5',
        status: 'Completed',
        priority: 'High',
        userAvatar: avatar9,
        userName: 'Russell B. Clancy',
        task: 7,
        comment: 3,
    },
    {
        id: 10,
        title: 'Invite user to a project',
        status: 'Completed',
        userAvatar: avatar10,
        userName: 'Robert B. Brown',
        task: 6,
        comment: 2,
    },
    {
        id: 11,
        title: 'Code HTML email template for welcome email',
        status: 'Completed',
        priority: 'Urgent',
        userAvatar: avatar5,
        userName: 'Maria K. Trevino',
        task: 3,
        comment: 5,
    },
];

export { tasks };
