import React, { Component } from 'react';
import api from '../../services/api';
import './style.scss'

export default class NextHolidays extends Component {
    state = {
        isHoliday: false,
        holidays: []
    }
    async componentDidMount(){
        const response = await api.get("NextPublicHolidays/BR");
        const { data } = response;
        this.setState({ holidays: data })
    }
    render() {
        const { holidays } = this.state;

        if( holidays.length === 0 ) return <></>;

        return (<ul>{holidays.map(this.renderRow)}</ul>);
    }

    renderRow = (holiday) => (
            <li>
                <h3>{this.formatDateToCursive(holiday.date)}</h3>
                <p>{holiday.localName}</p>
            </li>        
        );

    formatDateToCursive = (date) => {
        let months = ['Janeiro', 'Fevereiro', 'Março', 'Maio', 'Abril', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        date = date.split('-');
        return `${+date[2]} de ${months[+date[1] - 1]} de ${+date[0]}`
    }

    formatSringToBR = (date) => {
        date = date.split('-');
        return `${date[2]}/${date[1]}/${date[0]}`;
    }
}