import * as AlumnoService from '../services/alumno.service.js';

// getAll - Devuelve todos los alumnos, con opción de filtrar por grado
export const getAll = async (req, res) => {
  const { grado } = req.query;

  const estudiantes = await AlumnoService.getAll({ grado });

  res.json(estudiantes);
};

// getById - Devuelve un alumno por su ID
export const getById = async (req, res) => {
  const estudiante = await AlumnoService.getById(Number(req.params.id));

  res.json(estudiante);
};

// create - Agrega un nuevo alumno a la base de datos
export const create = async (req, res) => {
  const nuevoEstudiante = await AlumnoService.create({
    nombre: req.body?.nombre,
    apellido: req.body?.apellido,
    grado: req.body?.grado,
    seccion: req.body?.seccion,
  });

  res.status(201).json(nuevoEstudiante);
};

// update - Actualiza un alumno existente
export const update = async (req, res) => {
  const estudianteActualizado = await AlumnoService.update(
    Number(req.params.id),
    req.body,
  );

  res.json(estudianteActualizado);
};
// remove - Elimina un alumno por su ID
export const remove = async (req, res) => {
  await AlumnoService.remove(Number(req.params.id));

  res.status(204).send();
};