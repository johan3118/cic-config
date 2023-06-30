'use server'
const prisma = require('@/api/api.js')

export async function addAsignatura(data) {

  const clave = data.get("CLAVE");
  const nombre = data.get("NOMBRE");
  const creditos = Number(data.get("CREDITOS"));
  const deshabilitado = false;

  const newAsignatura = await prisma.asignatura.create({
    data: {
      asignatura_clave: clave,
      nombre: nombre,
      creditos: creditos,
      deshabilitado: deshabilitado,
    },
  });

  return newAsignatura;
}