import React, { Component } from 'react'
import { Table, Icon, Responsive } from 'semantic-ui-react'

class ComparisonTableTwo extends Component {

    buildHead(header) {
        // builds table header
        return (
          <Table.Header>
            <Table.Row>
                <Table.HeaderCell className="cv-head-cell white fs-2 padded">
                    {header[0]}
                </Table.HeaderCell>
                { header.slice(1).map(cell => (
                    <Table.HeaderCell className="cv-head-cell bg-dark-grey white fs-2 padded">
                        { cell }
                    </Table.HeaderCell>
                )) }
            </Table.Row>
          </Table.Header>
        )
    }

    buildRow(row) {
        // returns row based on passed in data
        let cells

        if (row.length < 3) {
            return (
                <Table.Row>
                    <Table.Cell>
                        <h6 className="fs-1 blue">{row[0]}</h6>
                    </Table.Cell>
                    <Table.Cell colSpan="2">
                        <h6 className="fs-1 grey">{row[1].content}</h6>
                        { row[1].meta }
                    </Table.Cell>
                </Table.Row>
            )
        } else {
            return (
                <Table.Row>
                    <Table.Cell>
                        <h6 className="fs-1 blue">{row[0]}</h6>
                    </Table.Cell>
                    <Table.Cell>
                        <h6 className="fs-1 grey">{row[1].content}</h6>
                        {row[1].meta}
                    </Table.Cell>
                    <Table.Cell>
                        <h6 className="fs-1 grey">{row[2].content}</h6>
                        {row[2].meta}
                    </Table.Cell>
                </Table.Row>
            )
        }

    }


    render() {
        const { rows, header } = this.props
        return (
            <Responsive minWidth={768}>
                <Table className='text-center cv-table' celled>
                    {this.buildHead(header)}
                    <Table.Body>
                        { rows.map(row => this.buildRow(row)) }
                    </Table.Body>
                </Table>
            </Responsive>
        )
    }
}

export default ComparisonTableTwo