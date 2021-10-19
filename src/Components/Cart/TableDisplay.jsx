import React from "react";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { AiFillDelete } from "react-icons/ai";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const Styles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const TableDisplay = ({ rows, removeFromCart }) => {
  const classes = Styles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Items</StyledTableCell>
            <StyledTableCell align="left">Size</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="left">Unit Price</StyledTableCell>
            <StyledTableCell align="left">Sub Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(
            (
              {
                product_id,
                id,
                name,
                media,
                line_total,
                price,
                quantity,
                selected_options,
              },
              index
            ) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  <Button
                    color="secondary"
                    startIcon={<AiFillDelete />}
                    onClick={() => removeFromCart(id)}
                  />
                  <Link to={`/product/${name}/${product_id}`}>{name}</Link>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {selected_options[0].option_name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {quantity}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {price.formatted_with_symbol}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {line_total.formatted_with_symbol}
                </StyledTableCell>
              </StyledTableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableDisplay;
