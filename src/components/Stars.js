import {Component} from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

class Stars extends Component {

    constructor(props){
        super(props);
        this.count = 0;
    }
    static propTypes = {
        count:PropTypes.number
    }

    render() {
        const {count} = this.props;
        this.count = count;
        const getStars = function(num) {
            let content = [];
            for(let i = 0; i<num; i++) {
                content.push(<li key={num[i]}>{<Star />}</li>);
            }
            return content;
        }
        if(this.count > 5 || this.count < 1) {
            return(<div></div>);
        } else {
            return(
                <ul className="card-body-stars">
                    {getStars(this.count)}
                </ul>
            );
        }
    }
}
 export default Stars;



