export interface PacienteModel {
  id?: number; // Es opcional porque al crear (POST) aún no tenemos el ID
  nombre: string;
  celular: string;
  fecha_nacimiento: string;
}
