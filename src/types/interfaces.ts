export interface User {
  name: string,
  age: number,
  id: string,
  role: string
}

export interface RoomInterface {
  id: string,
  grade: string,
  section: string,
  level: string,
  prom: number,
  teacher: string,
  subjects: ISubject[]
}

export interface Teacher {
  info: User,
}

export interface ISubject {
  name: string,
  id: string
}

export interface Student {
  info: User,
  prom: number,
  roomId: string
}
