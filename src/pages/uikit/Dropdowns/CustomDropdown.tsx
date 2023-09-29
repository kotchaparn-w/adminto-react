import { Dropdown } from 'react-bootstrap';

const CustomDropdown = () => {
    return (
        <>
            <h5 className="mb-1 mt-5">Forms</h5>
            <p className="text-muted font-13 mb-3">
                Put a form within a dropdown menu, or make it into a dropdown menu, and use margin or padding utilities
                to give it the negative space you require.
            </p>

            <Dropdown>
                <Dropdown.Toggle variant="secondary">
                    Form <i className="mdi mdi-chevron-down"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <form className="px-4 py-3">
                        <div className="mb-2">
                            <label htmlFor="exampleDropdownFormEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleDropdownFormEmail1"
                                placeholder="email@example.com"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleDropdownFormPassword1" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleDropdownFormPassword1"
                                placeholder="Password"
                            />
                        </div>
                        <div className="mb-2">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                <label className="form-check-label" htmlFor="dropdownCheck">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Sign in
                        </button>
                    </form>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">New around here? Sign up</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Forgot password?</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default CustomDropdown;
