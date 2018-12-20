import React, { Component } from 'react';
import Guides from "./Guides.jsx";
import { Button, Form, FormGroup, Input, InputGroupAddon, InputGroup} from 'reactstrap';



const API_KEY = "0b8da796b00334ae3471f60e6a10e8c6";
const SITE_ID = "8488";



class App extends Component {
  state ={
 results:[],
 search: '' 
};

    getGuides = async (e) => {
      e.preventDefault();
      const dsf = e.target.elements.searchFor.value;
      const api = await fetch(`https://lgapi-us.libapps.com/1.1/guides/577970?site_id=${SITE_ID}&key=${API_KEY}&sort_by=name&expand=owner&search_terms=${dsf}`)
      const data = await api.json();
      console.log(data);
      this.setState({
        results: data
});
    
    };
   
    render() {
    return (
      <div className="App">
         <Form onSubmit={this.getGuides}>
            <FormGroup>
                <InputGroup>
                <Input input-sm
                    type="text" 
                    name="searchFor" 
                    placeholder="Search Guides"/>
                    <InputGroupAddon addonType="append">
                        <Button>Submit</Button>
                    </InputGroupAddon>
                </InputGroup>
                
            </FormGroup>
           
        </Form>
        {this.state.results.length > 0 ? (
            <Guides results={this.state.results} />
        ): null}
        
        
      </div>
    
    )
  }
}
 
export default App;
