import React from 'react';
import Item from './../Item/Item'
import PropTypes from 'prop-types';

const Menu = ({title}) => {
    const agh ={
        name: "AGH",
        field: "Linguistic",
        begin: "october 1999",
        end: "september 2004"
    }
    
    return (
        <div>
            
                {title}
                <Item 
                    name = {agh.name} 
                    field = {agh.field}
                    begin={agh.begin}
                    end = {agh.end}
                />
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