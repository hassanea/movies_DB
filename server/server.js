// Refer to these tutorial:  https://www.youtube.com/watch?v=HPIjjFGYSJ4
// https://www.youtube.com/watch?v=v0t42xBIYIs


const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
var path = require('path');



const app = express();



const selectAllMovies = 'SELECT * FROM MOVIES';
const selectAllMoviesByID = 'SELECT * FROM MOVIES WHERE MOVIE_ID=?';
//const selectAllProperties = 'SELECT * FROM PROPERTIES';
//const selectAllPropsByID = 'SELECT * FROM PROPERTIES WHERE PROP_ID=?';
//const insertTasks = 'INSERT INTO TASKS SET ?';
//const delTasks = 'DELETE FROM TASKS WHERE TASK_ID=?';
//const updateTasks = 'UPDATE TASKS SET TASK_NAME=?, TASK_DESC=?, TASK_LOCATION=?, ASSIGNED_TO=? WHERE TASK_ID=?';
//const updateTaskComplete = 'UPDATE TASKS SET TASK_COMPLETE=? WHERE TASK_ID=?';

const conn = mysql.createConnection({
   host: '192.168.0.29',
   user: 'root',
   password: 'YoshiMan44gnuTux96!!!',
   database: 'movie_db',
   port: 3306    
});

conn.connect(error => {
    if (error) throw error;
    console.log(`Connected!`);
});

console.log(conn);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static('public'))
app.use(express.static('css'))
app.use(express.static('js'))
app.use(express.static(path.join(__dirname, 'public','css', 'js')));


app.get('/movies', (request, response) => {
  conn.query(selectAllMovies, (error, results) => {
    if (error) {
        return response.send(error);
    }

    else {
        return response.json({
          data: results
        })
    }
  });
});

app.get('/movies/:MOVIE_ID', (request, response) => {
    
const id = request.params.MOVIE_ID;   
    
  conn.query(selectAllMoviesByID, [id], (error, results) => {
  if (error) {
    return response.send(error);
  }
  else {
    	  response.send(JSON.stringify(results));
  }
  });
});

//app.get('/tasks/search?Name=${Name}', (request, response) => {
//  conn.query(selectAllTasks, (error, results) => {
//    if (error) {
//        return response.send(error);
//    }
//
//    else {
//        return response.json({
//          data: results
//        })
//    }
//  });
//});
//
//app.get('/properties', (request, response) => {
//  conn.query(selectAllProperties, (error, results) => {
//    if (error) {
//      return response.send(error);
//    }
//
//    else {
//        return response.json({
//          data: results
//        })
//    }
//  });
//});

//app.post('/movies/create', (request, response) => {
//
//let data = {
//MOVIE_NAME: request.body.movieName,
//TASK_DESC: request.body.Desc,
//TASK_LOCATION: request.body.Location,
//ASSIGNED_TO: request.body.Assign
//};
//
//
//    conn.query(insertTasks, data, (error, results, fields) => {
//      if (error) {
//        return response.send(error);
//      }
//
//      else {
//        response.send(JSON.stringify(results));
//      }
//
//    });
//});

//app.put('/tasks/update/:TASK_ID', (request, response) => {
//    
//const TASK_NAME = request.body.Name;    
//const TASK_DESC = request.body.Desc;
//const TASK_LOCATION = request.body.Location;
//const ASSIGNED_TO = request.body.Assign;    
//const id  = request.params.TASK_ID;    
//    
//    conn.query(updateTasks, [TASK_NAME, TASK_DESC, TASK_LOCATION, ASSIGNED_TO, id], (error, results) => {
//      if (error) {
//        return response.send(error);
//      }
//
//
//      else {
//        response.send(JSON.stringify(results));
//        }
//      
//
//    });    
//    
//
//});

//app.put('/tasks/taskComplete/update/:TASK_ID', (request, response) => {
//    
//const TASK_COMPLETE = request.body.Taskcomplete;        
//const id  = request.params.TASK_ID;    
//    
//    conn.query(updateTaskComplete, [TASK_COMPLETE, id], (error, results) => {
//      if (error) {
//        return response.send(error);
//      }
//
//
//      else {
//        response.send(JSON.stringify(results));
//        }
//      
//
//    });    
//    
//
//});

//
//app.get('/properties/:PROP_ID', (request, response) => {
//    
//const id = request.params.PROP_ID;  
//    
//  conn.query(selectAllPropsByID, [id], (error, results) => {
//  if (error) {
//    return response.send(error);
//  }
//  else {
//    	  response.send(JSON.stringify(results));
//  }
//  });
//});

//app.delete('/tasks/delete/:TASK_ID', (request, response) => {
//
//const id  = request.params.TASK_ID;
//
//    conn.query(delTasks, [id], (error, results) => {
//      if (error) {
//        return response.send(error);
//      }
//
//
//      else {
//        response.send(JSON.stringify(results));
//        }
//      
//
//    });
//});

app.use(function (request, response) {
  response.status(404).send("400 Not Found! Page does not exist...");
});

app.use(function (request, response, error) {
  console.log(error.stack);
  response.status(500).send("500 Something is broken!");
});

app.listen(4000, () => {
   console.log(`Movies server listening on port 4000`)
});
