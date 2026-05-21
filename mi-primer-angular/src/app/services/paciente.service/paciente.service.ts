import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PacienteModel } from '../../models/paciente.model/paciente.model';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {

  // En Angular moderno, usamos inject() en lugar del constructor tradicional
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7266/api/paciente';

  // GET: /api/paciente
  obtenerPacientes(): Observable<PacienteModel[]> {
    return this.http.get<PacienteModel[]>(this.apiUrl);
  }

  // GET: /api/paciente/{id}
  obtenerPacientePorId(id: number): Observable<PacienteModel> {
    return this.http.get<PacienteModel>(`${this.apiUrl}/${id}`);
  }

  // POST: /api/paciente
  crearPaciente(paciente: PacienteModel): Observable<PacienteModel> {
    return this.http.post<PacienteModel>(this.apiUrl, paciente);
  }

  // PUT: /api/paciente/{id}
  actualizarPaciente(id: number, paciente: PacienteModel): Observable<PacienteModel> {
    return this.http.put<PacienteModel>(`${this.apiUrl}/${id}`, paciente);
  }

  // DELETE: /api/paciente/{id}
  eliminarPaciente(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
