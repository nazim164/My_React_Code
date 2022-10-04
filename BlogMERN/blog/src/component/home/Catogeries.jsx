import {Button,makeStyles,Table,TableBody,TableCell,TableHead,TableRow,} from "@material-ui/core";
import { Link } from "react-router-dom";
import { categories } from "../../constants/Data";
import React from "react";
const useStyle = makeStyles({
  create: {
    margin: 20,
    background: "#6495ED",
    color: "#fff",
    width: "86%",
  },
  table: {
    border: "1px solid rgba(224,224,224,1)",
  },
  link:{
    textDecoration:'none',
    color:'inherit'
  }
});
const Catogeries = () => {
  const classes = useStyle();
  return (
    <>
     <Link to='/create' className={classes.link}><Button className={classes.create} variant="contained">Create Blog</Button></Link> 
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Link to={'/'}className={classes.link}>
              All Categories
              </Link>
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow>
       
              <TableCell>
              <Link to={`/?category=${category}`}className={classes.link}>
              {category}
              </Link>
              </TableCell>
             
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Catogeries;
