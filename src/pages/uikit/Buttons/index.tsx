import { Card, Col, Row } from 'react-bootstrap';
import BlockButton from './BlockButton';
import ButtonGroups from './ButtonGroups';

// hooks
import { usePageTitle } from '../../../hooks';

// types
import { Variant } from './types';
import ButtonSize from './ButtonSize';
import ButtonWithLabels from './ButtonsWithLabels';
import ButtonWidth from './ButtonWidth';

// component
import DefaultButton from './DefaultButton';
import DisabledButton from './DisabledButton';
import IconsButton from './IconsButton';
import OutlineButton from './OutlineButton';
import OutlineRoundedButton from './OutlineRoundedButton';
import RoundedButton from './RoundedButton';
import RoundedButtonWithLabels from './RoundedButtonsWithLabels';
import SoftButton from './SoftButton';
import SoftRoundedButton from './SoftRoundedButton';

// dummy data
import { buttonsWithLabels } from './data';

const variants: Variant[] = ['primary', 'success', 'info', 'warning', 'danger', 'dark', 'pink', 'secondary'];

const Buttons = () => {
    // set pagetitle
    usePageTitle({
        title: 'Buttons',
        breadCrumbItems: [
            {
                path: '/base-ui/buttons',
                label: 'Base UI',
            },
            {
                path: '/base-ui/buttons',
                label: 'Buttons',
                active: true,
            },
        ],
    });

    return (
        <Row>
            <Col xs={12}>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xl={6}>
                                <DefaultButton variants={variants} />
                            </Col>
                            <Col xl={6}>
                                <RoundedButton variants={variants} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xl={6}>
                                <OutlineButton variants={variants} />
                            </Col>
                            <Col xl={6}>
                                <OutlineRoundedButton variants={variants} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xl={6}>
                                <SoftButton variants={variants} />
                            </Col>
                            <Col xl={6}>
                                <SoftRoundedButton variants={variants} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xl={6}>
                                <ButtonWithLabels buttonswithLabels={buttonsWithLabels} />
                            </Col>
                            <Col xl={6}>
                                <RoundedButtonWithLabels buttonswithLabels={buttonsWithLabels} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xl={4}>
                                <ButtonWidth />
                            </Col>
                            <Col xl={4}>
                                <ButtonSize />
                            </Col>
                            <Col xl={4}>
                                <DisabledButton />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xl={6}>
                                <IconsButton />
                                <BlockButton />
                            </Col>
                            <Col xl={6}>
                                <ButtonGroups />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Buttons;
