import React, { Component } from 'react'
import { Table, Icon, Responsive } from 'semantic-ui-react'

class ComparisonTable extends Component {

    trueCell() {
        return (
            <Table.Cell className='checked-cell'>
                <Icon name='checkmark' />
            </Table.Cell>
        )
    }

    emptyCell() {
        return (
            <Table.Cell>
                -
            </Table.Cell>
        )
    }

    buildRow(items, criteria) {
        return (
            <Table.Row>
                <Table.Cell>
                    {criteria}
                </Table.Cell>
                { items.map(item => {

                    if (item[criteria] === true) {
                        return this.trueCell()
                    } else if(item[criteria] === false) {
                        return this.emptyCell()
                    } else {
                        return <Table.Cell className='checked-cell'>{item[criteria]}</Table.Cell>
                    }
                })}
            </Table.Row>
        )
    }

    buildBody(criterion, items) {

        return (
            <Table.Body>
                { criterion.map(criteria => {
                    return this.buildRow(items, criteria)
                })}
            </Table.Body>
        )
    }

    render() {
        const { items, criterion } = this.props
        const columns = items.length + 1
        return (
            <Responsive minWidth={768}>
                <Table className='text-center' basic='very' unstackable celled columns={columns}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                            </Table.HeaderCell>
                            { items.map(item => {
                                return (
                                    <Table.HeaderCell>
                                        <h4 className="fs-1">{item["Title"]}</h4>
                                        <div className="fs-1 grey">{item["Price"]}</div>
                                        <p className="fs--1">per user / per month</p>
                                    </Table.HeaderCell>
                                )
                            })}
                        </Table.Row>
                    </Table.Header>
                    { this.buildBody(criterion, items) }
                </Table>
            </Responsive>
        )
    }
}

export default ComparisonTable