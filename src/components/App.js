import React from 'react';
import {NewsDetails} from './NewsDetails'
import {ImageViewer} from "./ImageViewer";
import SearchBar from "./SearchBar";
import {api, api_url, apiKey, getNewsList} from "../API/api";
import axios from "axios";
import {Loader} from "./common/loader";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            isFetching: false
        }
    }

   handleSearch({trend, topic, country}) {
        let props = {
            q: topic
        }

        if(trend === 'top-headlines'){
            props = {
                q: topic,
                country
            }
        }

        this.setState({isFetching: true})
        // axios.get(`${api_url}${trend}`, {
        //     params: {
        //         ...props
        //     },
        //     headers: {
        //         'X-Api-Key': apiKey
        //     }
        // })
        //     .then(res => {
        //       const list = res.data.articles
        //         this.setState({list, isFetching: false})
        //     })
        //     .catch(err => console.error(err))

       const apiList = api
       this.setState({list: apiList.articles, isFetching: false})
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
