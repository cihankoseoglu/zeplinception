import React from 'react';
import Member from './Member';

class Members extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            owners: [],
            admins: [],
            users: [],
            headerIsActive: false,
        }
        
    }

    compareUsers(a,b){
        let nameA = a.user.username;
        let nameB = b.user.username;
        if(nameA < nameB){
            return -1;
        }
        if(nameA > nameB){
            return 1;
        }
        return 0;
    }

    componentWillReceiveProps(){
        // hacks javascript but this is actually what facebook recommends
        setTimeout(() => {
            this.setState({
                owners: this.props.memberInfo.filter(member => member.role === "owner").sort(this.compareUsers),
                admins: this.props.memberInfo.filter(member => member.role === "admin").sort(this.compareUsers),
                users: this.props.memberInfo.filter(member => member.role === "user").sort(this.compareUsers),
            });
            console.log("im here mischieving with names");
        }
        , 100);
        
    }

    
    renderItems(){
        let orderedMembers = this.state.owners.concat(this.state.admins.concat(this.state.users));
        return orderedMembers.map((item, index) => 
            <Member
                key={index.toString()}
                id={index} 
                role={item.role}
                username={item.user.username}
                avatar={item.user.avatar}
            />
        )
    }
    render(){
    return (


       <div>

       <div className="members-container">
            <div className="members-header" id="members-header">
                <div className="members-title">
                    Members
                </div>

                <div className="member-count">
                    <span className="member-count-span">{this.props.memberInfo.length}</span>
                </div>
            </div>
           
       <ul className="collection">
            {this.renderItems()}
        </ul>
       
       </div>

        </div>


    )
}
}


export default Members;
