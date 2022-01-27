import React from 'react';
import Item from './../Item/Item'
import PropTypes from 'prop-types';

const Menu = ({title}) => {
    return (
        <div>
            
                {title}
                <Item uniName="AGH"/>
                <Item uniname="SGH"/>
                <Item uniName="UW"/>
        </div>
    )

}
Menu.defaultProps = {
    title: 'Adrianna\' proficiency'
}
Menu.propTypes = {
    title: PropTypes.string
}

export default Menu;