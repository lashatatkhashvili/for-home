import React from 'react';
import useStyles from './MaterialTable.style';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';

const MaterialTable = props => {
  const {
    header,
    data,
    tableClasses,
    tableHeadClasses,
    tableHeadCellClassName,
    tableBodyCellClassName,
    rowClassname,
    ...rest
  } = props;
  const classes = useStyles(props);
  const handleRowClick = id => {
    const { onRowClick } = props;
    if (onRowClick) onRowClick(id);
  };
  return (
    <Table classes={tableClasses} {...rest}>
      <TableHead classes={tableHeadClasses}>
        <TableRow>
          {header.map((tableHeader, index) => (
            <TableCell key={index} className={tableHeadCellClassName}>
              {tableHeader}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data &&
          data.map(row => {
            const [id, ...restOfRow] = row;
            return (
              <TableRow
                key={id}
                onClick={() => handleRowClick(id)}
                className={rowClassname}
                classes={{ root: classes.tableRow }}
              >
                {restOfRow.map((cell, cellIndex) => {
                  return (
                    <TableCell key={`${id} ${cellIndex}`} className={tableBodyCellClassName}>
                      {cell}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};
MaterialTable.defaultProps = {
  tableClasses: {},
  tableHeadClasses: {},
};
MaterialTable.propTypes = {
  tableClasses: PropTypes.object,
  tableHeadClasses: PropTypes.object,
  tableHeadCellClassName: PropTypes.string,
  tableBodyCellClassName: PropTypes.string,
};
export default MaterialTable;
