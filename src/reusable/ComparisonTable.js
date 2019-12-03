import React, { Component } from 'react'
import { Table, Icon } from 'semantic-ui-react'

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

    buildBody(criteria, items) {

        return (
            <Table.Body>
                { criteria.map(measure => {
                    return measure === "Title" ? null : this.buildRow(items, measure)
                })}
            </Table.Body>
        )
    }

    render() {
        const { items, criteria } = this.props
        const columns = items.length + 1
        return (
            <div className="bg-white rounded-corners padded v-pad-2">
                <Table className='text-center' basic='very' unstackable celled columns={columns}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                            </Table.HeaderCell>
                            { items.map(item => {
                                return (
                                    <Table.HeaderCell>
                                        { item["Title"] }
                                    </Table.HeaderCell>
                                )
                            })}
                        </Table.Row>
                    </Table.Header>
                    { this.buildBody(criteria, items) }
                </Table>
            </div>
        )
    }
}

export default ComparisonTable