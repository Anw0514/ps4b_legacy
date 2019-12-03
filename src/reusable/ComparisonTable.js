import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

class ComparisonTable extends Component {

    buildCell() {

    }

    buildRow(items, criteria) {
        return (
            <Table.Row>
                <Table.Cell>
                    {criteria}
                </Table.Cell>
                { items.map(item => {
                    return (
                    <Table.Cell>{item[criteria]}</Table.Cell>
                    )
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
            <div>
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