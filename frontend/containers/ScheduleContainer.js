import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';


const ScheduleContainer = ({ schedule, addClass, deleteClass }) => {
    return (
        <div>
            <h3>Currently selected classes</h3>
            <ul>
                schedule.forEach()
            </ul>
        </div>
    );
};

ScheduleContainer.propTypes = {
    schedule: PropTypes.array,
    addClass: PropTypes.func,
    deleteClass: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        schedule: state.schedule
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addClass: (classObj, time) => dispatch(actions.addClass(classObj, time)),
        deleteClass: (classObj, time) => dispatch(actions.deleteClass(classObj, time))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScheduleContainer);
