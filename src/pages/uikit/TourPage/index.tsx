import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Joyride, { Step, CallBackProps, STATUS } from 'react-joyride';

// hooks
import { usePageTitle } from '../../../hooks';

// images
import logoDark from '../../../assets/images/logo-dark.png';
import logoLight from '../../../assets/images/logo-light.png';

const Tourpage = () => {
    // set pagetitle
    usePageTitle({
        title: 'Tour Page',
        breadCrumbItems: [
            {
                path: '/extended-ui/tour',
                label: 'Extended UI',
            },
            {
                path: '/extended-ui/tour',
                label: 'Tour Page',
                active: true,
            },
        ],
    });

    const [run, setRun] = useState<boolean>(true);
    const [steps] = useState<Step[]>([
        {
            content: <h3>Let's begin our journey!</h3>,
            locale: { skip: <div aria-label="skip">Skip</div> },
            placement: 'center',
            target: '#logo-tour',
        },
        {
            content: <p>You can find here status of user who's currently online.</p>,
            placement: 'bottom',
            target: '#logo-tour',
            title: 'Logo here',
        },
        {
            content: <p>Click on the button and make sidebar navigation small.</p>,
            placement: 'top',
            target: '#display-title-tour',
            title: 'Display Text',
        },
        {
            content: <p>Here you can change theme skins and other features.</p>,
            placement: 'top',
            target: '#thankyou-tour',
            title: 'Thank you !',
            locale: { last: <strong aria-label="last">Done</strong> },
        },
    ]);

    const handleJoyrideCallback = (data: CallBackProps) => {
        const { status } = data;
        const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

        if (finishedStatuses.includes(status)) {
            setRun(true);
        }
    };

    return (
        <>
            <Joyride
                callback={handleJoyrideCallback}
                continuous={true}
                run={run}
                scrollToFirstStep={true}
                showSkipButton={true}
                steps={steps}
                styles={{
                    tooltipContent: {
                        color: '#343a40',
                    },
                    tooltipTitle: {
                        color: '#343a40',
                    },
                    buttonSkip: {
                        color: '#6c757d',
                    },
                    options: {
                        primaryColor: '#71b6f9',
                    },
                }}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="text-center w-25 m-auto" id="logo-tour">
                                <div className="auth-logo">
                                    <Link to="#" className="logo logo-dark text-center">
                                        <span className="logo-lg">
                                            <img src={logoDark} alt="" height="20" />
                                        </span>
                                    </Link>

                                    <Link to="#" className="logo logo-light text-center">
                                        <span className="logo-lg">
                                            <img src={logoLight} alt="" height="20" />
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <h1 id="display-title-tour">This is a Heading 1</h1>
                            <p className="text-muted">
                                Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor
                                tincidunt tempor. Etiam id turpis viverra, vulputate sapien nec, varius sem. Curabitur
                                ullamcorper fringilla eleifend. In ut eros hendrerit est consequat posuere et at velit.
                            </p>

                            <div className="clearfix"></div>

                            <h2>This is a Heading 2</h2>
                            <p className="text-muted">
                                In nec rhoncus eros. Vestibulum eu mattis nisl. Quisque viverra viverra magna nec
                                pulvinar. Maecenas pellentesque porta augue, consectetur facilisis diam porttitor sed.
                                Suspendisse tempor est sodales augue rutrum tincidunt. Quisque a malesuada purus.
                            </p>

                            <div className="clearfix"></div>

                            <h3>This is a Heading 3</h3>
                            <p className="text-muted">
                                Vestibulum auctor tincidunt semper. Phasellus ut vulputate lacus. Suspendisse ultricies
                                mi eros, sit amet tempor nulla varius sed. Proin nisl nisi, feugiat quis bibendum vitae,
                                dapibus in tellus.
                            </p>

                            <div className="clearfix"></div>

                            <h4>This is a Heading 4</h4>
                            <p className="text-muted">
                                Nulla et mattis nunc. Curabitur scelerisque commodo condimentum. Mauris blandit, velit a
                                consectetur egestas, diam arcu fermentum justo, eget ultrices arcu eros vel erat.
                            </p>

                            <div className="clearfix"></div>

                            <h5>This is a Heading 5</h5>
                            <p className="text-muted">
                                Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at
                                volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris,
                                eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus elementum.
                                Suspendisse molestie ullamcorper ornare.
                            </p>

                            <div className="clearfix"></div>

                            <h6>This is a Heading 6</h6>
                            <p className="text-muted">
                                Donec ultricies, lacus id tempor condimentum, orci leo faucibus sem, a molestie libero
                                lectus ac justo. ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl nisi,
                                feugiat quis bibendum vitae, dapibus in tellus.
                            </p>

                            <div className="text-center pt-4">
                                <Link to="#" className=" btn btn-danger" id="thankyou-tour">
                                    Thank you !
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Tourpage;
