// 7 video

import React,{Component} from 'react';

export default class Create extends Component{

    constructor(props){
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeBusinessId = this.onChangeBusinessId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            person_name:'',
            business_name:'',
            business_id:''
        }

    }

    onChangePersonName(e){
        this.setState({
            person_name: e.target.value
        });
    }

    onChangeBusinessName(e){
        this.setState({
            business_name: e.target.value
        });
    }

    onChangeBusinessId(e){
        this.setState({
            business_id: e.target.value
        });
    }

    onSubmit(e){

        e.preventDefault();
        console.log(`The value are ${this.state.person_name}, ${this.state.business_name}, and ${this.state.business_id}`)
        this.setState({
            person_name:'',
            business_name:'',
            business_id:''
        })
    }





    render(){
        return(
            <div>
                <div style={{marginTop: 10}}>
                    <h3>Add New Business</h3>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Person Name: </label>
                        <input type="text" 
                            className="form-control"
                            value={this.state.person_name}
                            onChange={this.onChangePersonName} 
                        />
                    </div>
                    <br/>
                    <div className='form-group'>
                        <label>Add Business Name: </label>
                        <input type="text" 
                            className="form-control" 
                            value={this.state.business_name}
                            onChange={this.onChangeBusinessName}
                        />
                    </div>
                    <br/>
                    <div className='form-group'>
                        <label>Add Business ID: </label>
                        <input type="text" 
                            className="form-control" 
                            value={this.state.business_id}    
                            onChange={this.onChangeBusinessId}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value='Register Business' className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
 