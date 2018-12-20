import React from "react";

class Guides extends React.Component{
    render(){
        const {results} = this.props;

        return (
            <div className="card z-depth-0 project-summary">
                {results.map((result,index) =>
              <div className="card-content grey-text text-darken-3">
                <span className="card-title ">{result.name + index}</span>
                <p>{result.owner.first_name}</p>
                <p>{result.description}</p>
                <p className="grey-text"><p>{result.published}</p></p>
                  

              </div>
              )}
            </div>
           
          )
        }
    }
      
export default Guides;
