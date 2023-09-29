import React from 'react';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';

const DropdownSizes = () => {
    const sizes = [
        {
            size: 'lg',
            name: 'Large button',
        },
        {
            size: 'sm',
            name: 'Small button',
        },
    ];
    return (
        <>
            <h5 className="mb-1 mt-5">Sizing</h5>
            <p className="text-muted font-13 mb-3">
                Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.
            </p>
            {(sizes || []).map((item, index) => {
                return (
                    <React.Fragment key={index.toString()}>
                        <Dropdown as={ButtonGroup} size={item.size} className="mb-2 me-1">
                            <Dropdown.Toggle variant="light">
                                {item.name} <i className="mdi mdi-chevron-down"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider as="div" />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as={ButtonGroup} size={item.size} className="me-1 mb-2">
                            <Button variant="light">{item.name}</Button>
                            <Dropdown.Toggle variant="light">
                                <i className="mdi mdi-chevron-down"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider as="div" />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default DropdownSizes;
