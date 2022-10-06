import React,{useState,useEffect} from 'react';
import { Table } from 'react-bootstrap';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styles from './ListaCursos.module.css'
import Typography from "@mui/material/Typography";
const ListaCursos=props=>{
    const [coursename,Setcoursename]=useState("");
    const [coursegroup,Setcoursegroup]=useState("");
    const [course,Setcourse]=useState([]);
    // const handleClick=(e)=>{
    //     e.preventDefault();
    //     const course={coursename,coursegroup}
    //     console.log(course)
    //     fetch("http://localhost:8089/courses/list",{
    //         method:
    //     }

    //     )
    useEffect(() => {
        fetch("http://localhost:8089/courses/list")
        .then(res=>res.json())
        .then((result)=>{
            Setcourse(result);
        })
    }, [])
    console.log(course)
    return(
        <Card className={styles.card}>
            <Card  className={styles.card}>
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Datos Basicos del alumno
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Ejemplo Ejemplo Ejemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo Ejemplo
              </Typography>
              </CardContent>
            </Card>
        <CardContent>
          <Table responsive>
          <thead>
              <tr>
              <th>id</th>
              <th >Nombre del curso</th>
              <th >Rama del curso</th>
              </tr>
          </thead>
          <tbody>
              {course.map((course,index)=>(
              <tr>
              <td>{index}</td>
              <td key={index}>{course.coursename}</td>
              <td key={index}>{course.coursegroup}</td>
              </tr>
              ))
                }
          </tbody>
          </Table>
          </CardContent>
      </Card>
        
    )
}
export default ListaCursos;