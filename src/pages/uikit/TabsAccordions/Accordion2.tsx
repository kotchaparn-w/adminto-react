import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, Accordion, useAccordionButton, AccordionContext } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { TabContent } from './types';

type AccordionProps = {
    accordionContent: TabContent[];
};

type CustomToggleProps = {
    children: React.ReactNode;
    eventKey: string;
    containerClass: string;
    linkClass: string;
    callback?: any;
};

const CustomToggle = ({ children, eventKey, containerClass, linkClass, callback }: CustomToggleProps) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <h5 className={containerClass}>
            <Link
                to="#"
                className={classNames(linkClass, {
                    collapsed: !isCurrentEventKey,
                })}
                onClick={decoratedOnClick}
            >
                {children}
            </Link>
        </h5>
    );
};

const Accordion2 = ({ accordionContent }: AccordionProps) => {
    return (
        <Accordion className="custom-accordion mb-3" defaultActiveKey="0" id="accordion">
            {(accordionContent || []).map((item, index) => {
                return (
                    <Card className="mb-0" key={index.toString()}>
                        <Card.Header>
                            <CustomToggle
                                eventKey={String(index)}
                                containerClass="m-0 position-relative"
                                linkClass="custom-accordion-title text-reset d-block"
                            >
                                Q. {item.title}
                                <i className="mdi mdi-chevron-down accordion-arrow"></i>
                            </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={String(index)}>
                            <Card.Body>{item.text}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                );
            })}
        </Accordion>
    );
};

export default Accordion2;
