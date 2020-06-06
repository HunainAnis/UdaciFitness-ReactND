import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import MetricData from './MetricCard'
import { white } from '../utils/colors'
import TextButton from './TextButton'
import { addEntry } from '../actions'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import { removeEntry } from '../utils/api'

class EntryDetail extends React.Component {
    reset= () => {
        const { remove, goBack, entryId } = this.props
        remove()
        goBack()
        removeEntry(entryId)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.metrics && !nextProps.metrics.today;
    }

    render() {
        const { metrics } = this.props
        // console.log(this.props)
        return(
            <View style={styles.container}>
                <MetricData metrics={metrics} />
                <TextButton onPress={this.reset} style={{margin:20}} >RESET</TextButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 15
    }
})

const mapStateToProps = ( state, { route }) => {
    const { entryId } = route.params
    return{
        entryId,
        metrics:state[entryId],
    }
}

const mapDispatchToProps = (dispatch, { route, navigation }) => {
    const { entryId } = route.params
    return{
        remove: () => dispatch(addEntry({
            [entryId]:timeToString() === entryId
             ? getDailyReminderValue()
             : null
        })),
        goBack: () => navigation.goBack(),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryDetail)