var mostrarOcultar = function(e){
  var tabSeleccionado = e.target.dataset.tabSeleccionado;
  var overview = document.getElementById('overview');
  var students = document.getElementById('students');
  var teachers = document.getElementById('teachers');
  if (tabSeleccionado === 'tabOverview') {
    // ocultar
    students.style.display='none';
    teachers.style.display='none';
    // mostrar
    overview.style.display='block';

    var selectOptions = function(event){
      var indice = (event.target.selectedIndex);
      console.log(indice);
      var lugar = event.target[indice].dataset.sede;
      console.log(lugar);
      var generacion = event.target[indice].dataset.generacion;
      console.log(generacion);
      dataObtains(lugar, generacion)
    }

    var dataObtains = function(lugar, generacion){
      var estudiantes = data[sede][generacion]['students'];
      var studentsActive = 0;
      // console.log('hola');
      for (var i = 0; i < students.length; i++) {
        var active = estudiantes[i].active;

        // var nombre = students[i].name;
        // console.log(nombre);
        if (active === true) {
          studentsActive ++;
          console.log(studentsActive);
        }

        //console.log(activo);

        // var sprints = students[i].sprints.length;
        // console.log(sprints);
        // var sprints = students[i].sprints;
        // console.log(sprints);
        // coders(nombre, activo);
      }
    }


  } else if (tabSeleccionado ==='tabStudents') {
    // ocultar
    teachers.style.display='none';
    overview.style.display='none';
    // mostrar
    students.style.display='block';
  } else if (tabSeleccionado === 'tabTeachers') {
    // ocultar
    overview.style.display='none'
    students.style.display='none'
    // mostrar
    teachers.style.display='block'
  }
}
var cargarPagina = function(){
  var overview = document.getElementById('overview');
  var students = document.getElementById('students');
  var teachers = document.getElementById('teachers');
  overview.style.display='block';
  students.style.display='none';
  teachers.style.display='none';
  var elementosTab = document.getElementsByClassName('tab');
  for(var i = 0; i < elementosTab.length; i++){
    elementosTab[i].addEventListener('click', mostrarOcultar);
  }

}

cargarPagina();
