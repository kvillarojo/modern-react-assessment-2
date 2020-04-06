import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state ={
            topic: '',
            country: 'us',
            trend: 'everything'
        }
    }

    onFormSubmit(e){
        e.preventDefault();
        if(this.state.topic === ''){
            alert('please fill the search field')
            return false
        }

        this.props.onSubmit(this.state);
    }

    handleOptionChange(e) {
        const name = e.target.name
        this.setState({[name] : e.target.value})
    }

    render() {
        return (
            <div className={'ui segment'} style={{marginTop: '15px'}}>
                <form className={'ui form'} onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="ui three column grid">
                        <div className="column">
                            <div className={'field'}>
                                <select className="ui search dropdown" id={'country'} onChange={e => this.handleOptionChange(e) } name={'country'}>
                                    <option value="us">United States</option>
                                    <option value="ph">Philippines</option>
                                    <option value="cn">China</option>
                                    <option value="ru">Russia</option>
                                    <option value="ae">United Arab Emirates</option>
                                    <option value="ar">Argentina</option>
                                    <option value="jp">Japan</option>
                                    <option value="kr">South Korea</option>
                                    <option value="ca">Canada</option>
                                    <option value="ve">Venezuela</option>
                                </select>
                            </div>
                        </div>
                        <div className="column">
                            <div className={'field'}>
                                <select className={'ui search dropdown'} id={'trend'}  onChange={e => this.handleOptionChange(e) } name={'trend'}>
                                    <option value={'everything'}> Everything </option>
                                    <option value={'top-headlines'}> Top Headlines </option>
                                </select>
                            </div>
                        </div>
                        <div className="column">
                            <div className={'field'}>
                                <div className="ui icon input">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className={'field'}
                                        id={'searchNews'}
                                        name={'topic'}
                                        onChange={e => this.handleOptionChange(e)}
                                    />
                                    <i className="search icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
