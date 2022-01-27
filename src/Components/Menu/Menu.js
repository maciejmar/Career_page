import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({title}) => {
    return (
        <div>
            
                {title}
            
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