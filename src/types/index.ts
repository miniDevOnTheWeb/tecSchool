export type Role = 'student' | 'teacher' | 'administrator'

export type Grade =
  'Primero' |
  'Segundo' |
  'Tercero' |
  'Cuarto' |
  'Quinto' |
  'Sexto' |
  'Septimo' |
  'Octavo' |
  'Noveno' |
  'Primer año Bachillerato' |
  'Segundo año Bachillerato' |
  'Tercer año Bachillerato'

export const Grades = {
  Primero: "Primero",
  Segundo: "Segundo",
  Tercero: "Tercero",
  Cuarto: "Cuarto",
  Quinto: "Quinto",
  Sexto: "Sexto",
  Septimo: "Septimo",
  Octavo: "Octavo",
  Noveno: "Noveno",
  PrimerAno: "Primer año Bachillerato",
  SegundoAno: "Segundo año Bachillerato",
  TercerAno: "Tercer año Bachillerato",
} as const

// export enum Subject {
//   Matematicas = 'Matematicas',
//   EstudiosSociales = 'Estudios Sociales',
//   LenguajeYLiteratura = 'Lenguaje y Literatura',
//   CienciasYTecnologia = 'Ciencias y Tecnología',
//   Arte = 'Arte',
//   Ingles = 'Ingles',
//   EducacionFisica = 'Educación Física'
// } 