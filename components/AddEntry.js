import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getMetricMetaInfo, timeToString, getDailyReminderValue } from '../utils/helpers'
import UdaciSlider from './UdaciSlider'
import UdaciSteppers from './UdaciStepper'
import DateHeader from './DateHeader'
import { Ionicons } from '@expo/vector-icons'
import TextButton from './TextButton'
import { removeEntry, submitEntry } from '../utils/api'
import { connect } from 'react-redux'
import { addEntry } from '../actions'


function SubmitBtn({ onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Text>SUBMIT</Text>
        </TouchableOpacity>
    )
}


class AddEntry extends React.Component {

    state={
        run:0,
        bike:0,
        swim:0,
        sleep:0,
        eat:0,
    }

    increment(metric) {
        const { max, step } = getMetricMetaInfo(metric)
        this.setState((state)=>{    
            const count = state[metric]+step
            return{
                ...state,
                [metric]:count > max ? max : count 
            }
        })
    }

    decrement(metric) {
        const { step } = getMetricMetaInfo(metric)
        this.setState((state)=>{    
            const count = state[metric]-step
            return{
                ...state,
                [metric]:count < 0 ? 0 : count 
            }
        })
    }

    submit () {
        const key = timeToString()
        const entry = this.state

        this.props.dispatch(addEntry({
            [key]:entry
        }))

        this.setState({
            run:0,
            bike:0,
            swim:0,
            sleep:0,
            eat:0,
        })

        // Navigate to Home

        submitEntry({ key, entry })

        // Clear local Notification
    }

    slide(metric, value) {
        this.setState({
            [metric]:value
        })
    }

    reset = () => {
        const key= timeToString()
        this.props.dispatch(addEntry({
            [key]: getDailyReminderValue()
          }))
        // Route to Home
        console.log('reset worked')
        removeEntry(key)
    }

    render() {
        // console.log(this.props)
        const metaInfo = getMetricMetaInfo()
        if(this.props.alreadyLogged) {
            return(
                <View>
                    <Ionicons
                        name='ios-happy'
                        size={100}
                    />
                    <Text>You already logged your information for today</Text>
                    <TextButton onPress={this.reset} >Reset</TextButton>
                </View>
            )
        }
        return(
            <View>
                <DateHeader date={new Date().toLocaleDateString()} />
                {Object.keys(metaInfo).map((key)=>{
                    const { getIcon, type, ...rest } = metaInfo[key]
                    const value = this.state[key]
                    return (
                        <View key={key}>
                            {getIcon()}
                            {type === 'slider'
                            ? <UdaciSlider
                                value={value}
                                onChange={(value)=>this.slide(key, value)}
                                {...rest}
                            />
                            : <UdaciSteppers
                                value={value}
                                onIncrement = {()=> this.increment(key)}
                                onDecrement= {()=> this.decrement(key)}
                                {...rest}
                            />}
                        </View>
                    )
                })}
                <SubmitBtn onPress={()=>this.submit()} />
            </View>
        )
    }
}

function mapStateToProps(state) {
    const key = timeToString()
    return{
        alreadyLogged:state[key] &&typeof state[key].today === 'undefined'
    }
}

export default connect(mapStateToProps)(AddEntry)