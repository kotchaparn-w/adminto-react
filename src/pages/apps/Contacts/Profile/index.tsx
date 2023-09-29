import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../../hooks';

// components
import TeamMembers from '../../../../components/TeamMembers';
import Reminders from '../../../../components/Reminders';

import UserBox from './UserBox';
import NewPost from './NewPost';
import CommentBox from './CommentBox';

// dummy data
import { members, posts, reminder } from './data';

const Profile = () => {
    // set pagetitle
    usePageTitle({
        title: 'Profile',
        breadCrumbItems: [
            {
                path: '/apps/contacts/profile',
                label: 'Contacts',
            },
            {
                path: '/apps/contacts/profile',
                label: 'Profile',
                active: true,
            },
        ],
    });

    return (
        <Row>
            <Col sm={8}>
                <UserBox />
                <NewPost />
                <CommentBox posts={posts} />
            </Col>
            <Col sm={4}>
                <TeamMembers members={members} />
                <Reminders reminder={reminder} />
            </Col>
        </Row>
    );
};

export default Profile;
