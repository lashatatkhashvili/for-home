import React from 'react';
import useStyles from './MaterialPagination.style';
import TablePagination from '@material-ui/core/TablePagination';
import { TABLE_ROW_PER_PAGE } from '../../constants/misc';

const MaterialPagination = props => {
  const { totalData, currentPage, onChangePage } = props;
  const classes = useStyles(props);

  return (
    <TablePagination
      component="div"
      classes={{
        root: classes.tablePagination,
        spacer: classes.tablePaginationSpacer,
        toolbar: classes.tablePaginationToolbar,
        actions: classes.tablePaginationActions,
      }}
      labelRowsPerPage=""
      rowsPerPageOptions={[]}
      // colSpan={3}
      count={totalData}
      rowsPerPage={TABLE_ROW_PER_PAGE}
      page={currentPage - 1 < 0 ? 0 : currentPage - 1}
      // labelDisplayedRows={() => {}}
      // SelectProps=""
      onChangePage={onChangePage}
      // onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

export default MaterialPagination;
