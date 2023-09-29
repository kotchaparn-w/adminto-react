import { Card, Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import classNames from 'classnames';

// types
import { Statistic } from './types';

type StatisticsWidgetProps = {
    statisticsWidgets: Statistic[];
};

const StatisticsWidget = ({ statisticsWidgets }: StatisticsWidgetProps) => {
    return (
        <Row>
            {(statisticsWidgets || []).map((statistic, index) => {
                return (
                    <Col xl={3} md={6} key={index.toString()}>
                        <Card>
                            <Card.Body>
                                <div className="text-center">
                                    <h2 className={classNames('fw-normal', 'text-' + statistic.variant)}>
                                        <CountUp
                                            duration={3}
                                            start={statistic.stats - 1000 > 0 ? statistic.stats - 1000 : 0}
                                            end={statistic.stats}
                                        />
                                    </h2>
                                    <h5>{statistic.title}</h5>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
};

export default StatisticsWidget;
