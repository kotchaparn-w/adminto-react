import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import StatisticsWidget1 from '../../../components/StatisticsWidget1';
import StatisticsWidget2 from '../../../components/StatisticsWidget2';
import StatisticsWidget3 from '../../../components/StatisticsWidget3';
import TeamMembers from '../../../components/TeamMembers';
import ContactDetails from '../../../components/ContactDetails';
import Reminders from '../../../components/Reminders';

import StatisticsWidget from './StatisticsWidget';
import Progressbar from './Progressbar';

// images
import avatar1 from '../../../assets/images/users/user-3.jpg';
import avatar2 from '../../../assets/images/users/user-2.jpg';
import avatar3 from '../../../assets/images/users/user-1.jpg';
import avatar4 from '../../../assets/images/users/user-10.jpg';

// dummy data
import { contact, statisticsWidgets } from './data';
import { members, reminder } from '../../apps/Contacts/Profile/data';

const Widgets = () => {
    // set pagetitle
    usePageTitle({
        title: 'Widgets',
        breadCrumbItems: [
            {
                path: '/widgets',
                label: 'Components',
            },
            {
                path: '/widgets',
                label: 'Widgets',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col xl={3} md={6}>
                    <StatisticsWidget1
                        title="Total Revenue"
                        color={'#f05050'}
                        data={50}
                        stats={256}
                        subTitle="Revenue today"
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget1
                        title="Statistics"
                        color={'#ffbd4a'}
                        data={80}
                        stats={4569}
                        subTitle="Revenue today"
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget1
                        title="Total Revenue"
                        color={'#35b8e0'}
                        data={77}
                        stats={8545}
                        subTitle="Revenue today"
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget1
                        title="Statistics"
                        color={'#10c469'}
                        data={65}
                        stats={3562}
                        subTitle="Revenue today"
                    />
                </Col>
            </Row>

            <Row>
                <Col xl={3} md={6}>
                    <StatisticsWidget2
                        variant="pink"
                        title="Daily Sales"
                        trendValue="32%"
                        trendIcon="mdi mdi-trending-up"
                        stats={158}
                        subTitle="Revenue today"
                        progress={77}
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget2
                        variant="success"
                        title="Sales Analytics"
                        trendValue="32%"
                        trendIcon="mdi mdi-trending-up"
                        stats={8451}
                        subTitle="Revenue today"
                        progress={77}
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget2
                        variant="primary"
                        title="Sales Analytics"
                        trendValue="32%"
                        trendIcon="mdi mdi-trending-up"
                        stats={7540}
                        subTitle="Revenue today"
                        progress={77}
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget2
                        variant="warning"
                        title="Daily Sales"
                        trendValue="32%"
                        trendIcon="mdi mdi-trending-up"
                        stats={9841}
                        subTitle="Revenue today"
                        progress={77}
                    />
                </Col>
            </Row>

            <Row>
                <Col xl={3} md={6}>
                    <StatisticsWidget3
                        variant="warning"
                        avatar={avatar1}
                        name="Chadengle"
                        emailId="coderthemes@gmail.com"
                        position="Admin"
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget3
                        variant="secondary"
                        avatar={avatar2}
                        name="Michael Zenaty"
                        emailId="coderthemes@gmail.com"
                        position="Support Lead"
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget3
                        variant="success"
                        avatar={avatar3}
                        name="Stillnotdavid"
                        emailId="coderthemes@gmail.com"
                        position="Designer"
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget3
                        variant="info"
                        avatar={avatar4}
                        name="Tomaslau"
                        emailId="coderthemes@gmail.com"
                        position="Developer"
                    />
                </Col>
            </Row>

            <StatisticsWidget statisticsWidgets={statisticsWidgets} />

            <Row>
                <Col xl={3} md={6}>
                    <TeamMembers members={members} />
                </Col>
                <Col xl={3} md={6}>
                    <ContactDetails contact={contact} />
                </Col>
                <Col xl={3} md={6}>
                    <Progressbar />
                </Col>
                <Col xl={3} md={6}>
                    <Reminders reminder={reminder} />
                </Col>
            </Row>
        </>
    );
};

export default Widgets;
