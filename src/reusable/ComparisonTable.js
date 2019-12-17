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

    buildRow(items, criterion) {
        return (
            <Table.Row>
                <Table.Cell>
                    {criterion}
                </Table.Cell>
                { items.map(item => {

                    if (item[criterion] === true) {
                        return this.trueCell()
                    } else if(item[criterion] === false) {
                        return this.emptyCell()
                    } else {
                        return <Table.Cell className='checked-cell'>{item[criterion]}</Table.Cell>
                    }
                })}
            </Table.Row>
        )
    }

    buildBody(criteria, items) {

        return (
            <Table.Body>
                { criteria.map(criterion => {
                    return this.buildRow(items, criterion)
                })}
            </Table.Body>
        )
    }

    render() {
        const { items, criteria } = this.props
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
                                        <h6>{item["Title"]}</h6>
                                        <div className="fs-1 grey">{item["Price"]}</div>
                                        <p className="fs--1">per user / per month</p>
                                    </Table.HeaderCell>
                                )
                            })}
                        </Table.Row>
                    </Table.Header>
                    { this.buildBody(criteria, items) }
                </Table>
            </Responsive>
        )
    }
}

export default ComparisonTable