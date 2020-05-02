import React, {useState} from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

const DropDown = (props) => {
    /*    const [dropdownOpen, setOpen] = useState(false);

        const toggle = () => setOpen(!dropdownOpen);

        return (
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    {props.dropType}
                </DropdownToggle>
                <DropdownMenu>
                    {props.options.map((option) =>
                        <DropdownItem key={`${props.dropType}-${option}`}>{option}</DropdownItem>
                    )}
                </DropdownMenu>
            </ButtonDropdown>
        );*/

    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Button Dropdown
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    );

}

export default DropDown;
