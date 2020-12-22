import React, {Component} from 'react';

export default class CreateRecipe extends Component{
    constructor(props){
        super(props);

        this.state={
            username:'',
            description:'',
            duration:0,
            date: new Date(),
            users:[]
        }
    }

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }

    render(){
        return(
            <div>
                <p>This is CreateRecipe Component</p>
            </div>
        )
    }
}