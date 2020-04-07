import React from 'react'

export const NewsDetails = ({children, title, content}) => {
    if (children) {
        return (
            <div>
                <div className="item">
                    <div className="ui grid">
                        <div className="four wide column">
                            { children }
                        </div>
                        <div className="eleven wide column">
                            <div className={"ui header"}>
                                <h3>{title}</h3>
                            </div>
                            <div className="content">
                                <p> {content}  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="item">
                <div className={'ui grid'}>
                    <div className={"ui header"}>
                        <h3>{title}</h3>
                    </div>
                    <div className="content">
                        <p> {content}  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
