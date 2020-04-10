import * as React from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap'
import { User as UserIcon } from 'react-feather'
import { Context, AppState } from '../Context'

type Props = {
    brand: string
}

export const Menu: React.FC<Props> = ({ brand }) => {
    // TODO athenticated user menu
    const appState = React.useContext<AppState>(Context)

    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <Link to="/" className="navbar-brand">{brand}</Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/icons" className="nav-link">Icons</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/" className="nav-link">Router Link</Link>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Reactrap NavLink</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Dropdown
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Option 3
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>
                    Simple text
                </NavbarText>
                <Nav navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            <UserIcon size={16} />
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Profile
                            </DropdownItem>
                            <DropdownItem>
                                Settings
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Log out
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    )
}