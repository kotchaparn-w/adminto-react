import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../hooks';

// react plugin for creating vector maps
import { WorldVectorMap } from '../../components/VectorMap';
import { RussiaVectorMap } from '../../components/VectorMap';
import { SpainVectorMap } from '../../components/VectorMap';
import { CanadaVectorMap } from '../../components/VectorMap';
import { UsaVectorMap } from '../../components/VectorMap';
import { ItalyVectorMap } from '../../components/VectorMap';
import { IraqVectorMap } from '../../components/VectorMap';

const VectorMaps = () => {
    // set pagetitle
    usePageTitle({
        title: 'Vector Maps',
        breadCrumbItems: [
            {
                path: '/maps/vector',
                label: 'Maps',
            },
            {
                path: '/maps/vector',
                label: 'Vector Maps',
                active: true,
            },
        ],
    });

    // vector map config
    const worldMapOptions = {
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#d4dadd',
            },
        },
        markers: [
            { coords: [41.9, 12.45], name: 'Vatican City' },
            { coords: [43.73, 7.41], name: 'Monaco' },
            { coords: [-0.52, 166.93], name: 'Nauru' },
            { coords: [-8.51, 179.21], name: 'Tuvalu' },
            { coords: [43.93, 12.46], name: 'San Marino' },
            { coords: [47.14, 9.52], name: 'Liechtenstein' },
            { coords: [7.11, 171.06], name: 'Marshall Islands' },
            { coords: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
            { coords: [3.2, 73.22], name: 'Maldives' },
            { coords: [35.88, 14.5], name: 'Malta' },
            { coords: [12.05, -61.75], name: 'Grenada' },
            { coords: [13.16, -61.23], name: 'Saint Vincent and the Grenadines' },
            { coords: [13.16, -59.55], name: 'Barbados' },
            { coords: [17.11, -61.85], name: 'Antigua and Barbuda' },
            { coords: [-4.61, 55.45], name: 'Seychelles' },
            { coords: [7.35, 134.46], name: 'Palau' },
            { coords: [42.5, 1.51], name: 'Andorra' },
            { coords: [14.01, -60.98], name: 'Saint Lucia' },
            { coords: [6.91, 158.18], name: 'Federated States of Micronesia' },
            { coords: [1.3, 103.8], name: 'Singapore' },
            { coords: [0.33, 6.73], name: 'SÃ£o TomÃ© and PrÃncipe' },
        ],
        markerStyle: {
            initial: {
                r: 9,
                fill: '#6658dd',
                'fill-opacity': 0.9,
                stroke: '#fff',
                'stroke-width': 7,
                'stroke-opacity': 0.4,
            },
            hover: {
                fill: '#6658dd',
                stroke: '#fff',
                'fill-opacity': 1,
                'stroke-width': 1.5,
            },
        },
    };

    return (
        <>
            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">World Map</h4>
                            <WorldVectorMap height="420px" width="100%" options={worldMapOptions} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">Russia Map</h4>
                            <RussiaVectorMap
                                height="350px"
                                width="100%"
                                options={{
                                    zoomOnScroll: false,
                                    regionStyle: {
                                        initial: {
                                            fill: '#3bafda',
                                        },
                                    },
                                }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">Spain Map</h4>
                            <SpainVectorMap
                                height="350px"
                                width="100%"
                                options={{
                                    zoomOnScroll: false,
                                    backgroundColor: 'transparent',
                                    regionStyle: {
                                        initial: {
                                            fill: '#f1556c',
                                        },
                                    },
                                }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">Canada Map</h4>
                            <CanadaVectorMap
                                height="350px"
                                width="100%"
                                options={{
                                    zoomOnScroll: false,
                                    backgroundColor: 'transparent',
                                    regionStyle: {
                                        initial: {
                                            fill: '#1abc9c',
                                        },
                                    },
                                }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">USA Map</h4>
                            <UsaVectorMap
                                height="350px"
                                width="100%"
                                options={{
                                    zoomOnScroll: false,
                                    backgroundColor: 'transparent',
                                    regionStyle: {
                                        initial: {
                                            fill: '#6559cc',
                                        },
                                    },
                                }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">Italy Map</h4>
                            <ItalyVectorMap
                                height="350px"
                                width="100%"
                                options={{
                                    zoomOnScroll: false,
                                    backgroundColor: 'transparent',
                                    regionStyle: {
                                        initial: {
                                            fill: '#4a81d4',
                                        },
                                    },
                                }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mb-3">Iraq Map</h4>
                            <IraqVectorMap
                                height="350px"
                                width="100%"
                                options={{
                                    zoomOnScroll: false,
                                    backgroundColor: 'transparent',
                                    regionStyle: {
                                        initial: {
                                            fill: '#f7b84b',
                                        },
                                    },
                                }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default VectorMaps;
