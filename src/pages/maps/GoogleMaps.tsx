import React, { useRef, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

// hooks
import { usePageTitle } from '../../hooks';

type MapContainerProps = {
    google: any;
};

const BasicMap = ({ google }: MapContainerProps) => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Basic</h4>

                {/* basic map */}
                <div id="gmaps-basic" style={{ position: 'relative' }} className="gmaps">
                    <Map
                        google={google}
                        initialCenter={{ lat: 21.569874, lng: 71.5893798 }}
                        zoom={14}
                        style={{ width: '100%', height: '100%', position: 'relative' }}
                        zoomControlOptions={{
                            position: google.maps.ControlPosition.LEFT_TOP,
                        }}
                    ></Map>
                </div>
            </Card.Body>
        </Card>
    );
};

const WithMarkers = ({ google }: MapContainerProps) => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Markers</h4>
                <div className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                    <Map
                        google={google}
                        zoom={18}
                        initialCenter={{ lat: 21.569874, lng: 71.5893798 }}
                        style={{ width: '100%', height: '100%', position: 'relative' }}
                        zoomControlOptions={{
                            position: google.maps.ControlPosition.LEFT_TOP,
                        }}
                    >
                        <Marker
                            name="SOMA"
                            position={{ lat: 21.56956, lng: 71.5892598 }}
                            title="The marker`s title will appear as a tooltip."
                        />

                        <Marker name="Dolores park" position={{ lat: 21.56969, lng: 71.5893798 }} />
                    </Map>
                </div>
            </Card.Body>
        </Card>
    );
};

const StreetViewMap = ({ google }: MapContainerProps) => {
    let mapRef: any = useRef();

    /**
     * Activate the street view
     */
    const activateStreetView = (position: { lat: number; lng: number }) => {
        if (mapRef) {
            const mapObj = mapRef.map.getStreetView();
            mapObj.setPov({ heading: 34, pitch: 10 });
            mapObj.setPosition(position);
            mapObj.setVisible(true);
        }
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Street View Panoramas Google Map</h4>

                <div id="panorama" className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                    <Map
                        google={google}
                        ref={(map: any) => (mapRef = map)}
                        zoom={14}
                        initialCenter={{ lat: 40.7295174, lng: -73.9986496 }}
                        style={{ width: '100%', height: '100%', position: 'relative' }}
                        onReady={() => {
                            activateStreetView({ lat: 40.7295174, lng: -73.9986496 });
                        }}
                    ></Map>
                </div>
            </Card.Body>
        </Card>
    );
};

const ClickableMarkers = ({ google }: MapContainerProps) => {
    const [activeMarker, setActiveMarker] = useState<any>({});
    const [selectedPlace, setSelectedPlace] = useState<any>({});
    const [showingInfoWindow, setShowingInfoWindow] = useState<boolean>(false);

    const onInfoWindowClose = () => {
        setActiveMarker(null);
        setShowingInfoWindow(false);
    };

    // handles operation on marker click
    const onBasicMarkerClick = () => {
        alert('You clicked in this marker');
    };

    // handles operation on marker click
    const onMarkerClick = (props: any, marker: any, e: any) => {
        setActiveMarker(marker);
        setSelectedPlace(props);
        setShowingInfoWindow(true);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Clickable Markers</h4>
                <div className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                    <Map
                        google={google}
                        zoom={18}
                        initialCenter={{ lat: 21.569874, lng: 71.5893798 }}
                        style={{ width: '100%', height: '100%', position: 'relative' }}
                        zoomControlOptions={{
                            position: google.maps.ControlPosition.LEFT_TOP,
                        }}
                    >
                        {/* basic marker */}
                        <Marker
                            title={'This is sweet home.'}
                            name={'Home sweet home!'}
                            onClick={onBasicMarkerClick}
                            position={{ lat: 21.56956, lng: 71.5892598 }}
                        />

                        {/* clickable marker */}
                        <Marker
                            name="Current location"
                            title={'Marker with InfoWindow'}
                            onClick={onMarkerClick}
                            position={{ lat: 21.56969, lng: 71.5893798 }}
                        />
                        <InfoWindow marker={activeMarker} onClose={onInfoWindowClose} visible={showingInfoWindow}>
                            <div>
                                <p>{selectedPlace.name}</p>
                            </div>
                        </InfoWindow>
                    </Map>
                </div>
            </Card.Body>
        </Card>
    );
};

const GoogleMaps = ({ google }: MapContainerProps) => {
    // set pagetitle
    usePageTitle({
        title: 'Google Maps',
        breadCrumbItems: [
            {
                path: '/maps/google',
                label: 'Maps',
            },
            {
                path: '/maps/google',
                label: 'Google Maps',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col lg={6}>
                    <BasicMap google={google} />
                </Col>

                <Col lg={6}>
                    <WithMarkers google={google} />
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <StreetViewMap google={google} />
                </Col>
                <Col lg={6}>
                    <ClickableMarkers google={google} />
                </Col>
            </Row>
        </>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDsucrEdmswqYrw0f6ej3bf4M4suDeRgNA',
})(GoogleMaps);
