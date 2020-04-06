import React from 'react';
import {NewsDetails} from './NewsDetails'
import {ImageViewer} from "./ImageViewer";
import SearchBar from "./SearchBar";
import {getNews} from "../API/api";
import {Loader} from "./common/loader";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            isFetching: false
        }
    }

   async handleSearch({trend, props}) {
        this.setState({isFetching: true})
        const result = await getNews(trend, props)
        this.setState({list: result, isFetching: false})
    }

    loadNewsList() {
        let keyNum = 0;
        console.log(this.state.list)
        if (this.state.list.length) {
            return <div className="ui divided list">
                {this.state.list.map(x => (
                    <NewsDetails content={x.content} title={x.title} key={keyNum++}>
                        {x.urlToImage &&
                        <ImageViewer src={x.urlToImage}/>
                        }
                    </NewsDetails>
                    )
                )}
            </div>
        }
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '25px'}}>
                <h2 className={"ui header center aligned"}> KJ News App </h2>

                <SearchBar  onSubmit={(e) =>  this.handleSearch(e)}/>

                <div className={'row'} style={{marginTop: '20px'}}>
                    <div className={'header'}> <b> Search Result </b> </div>
                    <div className={'content'}> Found {this.state.list.length} articles </div>
                </div>

                { this.state.isFetching ?
                    <Loader/>
                    :
                    this.loadNewsList()
                }

             </div>
         )
     }
}

export default App;
