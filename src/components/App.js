import React from 'react';
import {NewsDetails} from './NewsDetails'
import {ImageViewer} from "./ImageViewer";
import SearchBar from "./SearchBar";
import {api_url, apiKey, getNewsList} from "../API/api";
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
        axios.get(`${api_url}${trend}`, {
            params: {
                ...props
            },
            headers: {
                'X-Api-Key': apiKey
            }
        })
            .then(res => {
              const list = res.data.articles
                this.setState({list, isFetching: false})
            })
            .catch(err => console.error(err))
    }

    loadNewsList() {
        let keyNum = 0;
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

                {/*SearchBar*/}
                <SearchBar  onSubmit={(e) =>  this.handleSearch(e)}/>

                {/*display number of list to show*/}
                <div className={'row'} style={{marginTop: '20px'}}>
                    <div className={'header'}> <b> Search Result </b> </div>
                    <div className={'content'}> Found {this.state.list.length} articles </div>
                </div>

                {/*display list if exist*/}
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